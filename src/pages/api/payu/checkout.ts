import type { APIRoute } from 'astro';

const SALT_SEPARATOR = '|||||';

async function sha512(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-512', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const merchantKey = import.meta.env.PAYU_MERCHANT_KEY;
    const merchantSalt = import.meta.env.PAYU_MERCHANT_SALT;
    const baseUrl = import.meta.env.PAYU_BASE_URL || 'https://test.payu.in';
    const siteUrl = import.meta.env.SITE_URL || 'https://saranshkawadkar.dev';

    if (!merchantKey || !merchantSalt) {
      return new Response(JSON.stringify({ error: 'PayU not configured on server' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = (await request.json()) as {
      amount?: number;
      currency?: string;
      name?: string;
      email?: string;
      phone?: string;
    };

    const amount = Number(body.amount);
    const currency = (body.currency || 'INR').toUpperCase();
    const firstname = body.name || 'Supporter';
    const email = body.email || '';
    const phone = body.phone || '';

    if (!amount || amount <= 0 || amount > 100000) {
      return new Response(JSON.stringify({ error: 'Invalid amount' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const txnid = `SUP_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    const productinfo = `Support tip - ${currency} ${amount}`;
    const udf1 = currency;
    const udf2 = '';
    const udf3 = '';
    const udf4 = '';
    const udf5 = '';

    const hashString = [
      merchantKey,
      txnid,
      amount.toString(),
      productinfo,
      firstname,
      email,
      udf1,
      udf2,
      udf3,
      udf4,
      udf5,
      ...Array(5).fill(''),
      merchantSalt,
    ].join('|');

    const hash = await sha512(hashString);

    const surl = `${siteUrl}/api/payu/return?status=success&txnid=${txnid}&amount=${amount}&currency=${currency}`;
    const furl = `${siteUrl}/api/payu/return?status=failure&txnid=${txnid}`;

    return new Response(
      JSON.stringify({
        key: merchantKey,
        txnid,
        amount: amount.toFixed(2),
        productinfo,
        firstname,
        email,
        phone,
        udf1,
        udf2,
        udf3,
        udf4,
        udf5,
        hash,
        surl,
        furl,
        service_provider: 'payu_paisa',
        baseUrl,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

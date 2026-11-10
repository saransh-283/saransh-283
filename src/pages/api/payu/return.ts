import type { APIRoute } from 'astro';

async function sha512(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-512', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function getParam(request: Request, url: URL, key: string): string {
  // Try search params first (GET), then form body (POST)
  const sp = url.searchParams.get(key);
  if (sp !== null) return sp;
  return '';
}

export const GET: APIRoute = async ({ request, url }) => {
  return handleReturn(request, url);
};

export const POST: APIRoute = async ({ request, url }) => {
  return handleReturn(request, url);
};

async function handleReturn(request: Request, url: URL) {
  try {
    const merchantKey = import.meta.env.PAYU_MERCHANT_KEY;
    const merchantSalt = import.meta.env.PAYU_MERCHANT_SALT;
    const siteUrl = import.meta.env.SITE_URL || 'https://saranshkawadkar.dev';

    if (!merchantKey || !merchantSalt) {
      return new Response('PayU not configured', { status: 500 });
    }

    // PayU POSTs form data to surl/furl. Read from body if POST, query if GET.
    let status = getParam(request, url, 'status');
    let txnid = getParam(request, url, 'txnid');
    let amount = getParam(request, url, 'amount');
    let hash = getParam(request, url, 'hash');
    let mihpayid = getParam(request, url, 'mihpayid');
    let udf1 = getParam(request, url, 'udf1');
    let udf2 = getParam(request, url, 'udf2');
    let udf3 = getParam(request, url, 'udf3');
    let udf4 = getParam(request, url, 'udf4');
    let udf5 = getParam(request, url, 'udf5');
    let email = getParam(request, url, 'email');
    let firstname = getParam(request, url, 'firstname');
    let productinfo = getParam(request, url, 'productinfo');

    if (request.method === 'POST') {
      try {
        const formData = await request.formData();
        status = formData.get('status')?.toString() || status;
        txnid = formData.get('txnid')?.toString() || txnid;
        amount = formData.get('amount')?.toString() || amount;
        hash = formData.get('hash')?.toString() || hash;
        mihpayid = formData.get('mihpayid')?.toString() || mihpayid;
        udf1 = formData.get('udf1')?.toString() || udf1;
        udf2 = formData.get('udf2')?.toString() || udf2;
        udf3 = formData.get('udf3')?.toString() || udf3;
        udf4 = formData.get('udf4')?.toString() || udf4;
        udf5 = formData.get('udf5')?.toString() || udf5;
        email = formData.get('email')?.toString() || email;
        firstname = formData.get('firstname')?.toString() || firstname;
        productinfo = formData.get('productinfo')?.toString() || productinfo;
      } catch {}
    }

    // PayU response hash string:
    // salt|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
    const responseHashString = [
      merchantSalt,
      status || '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      udf5 || '',
      udf4 || '',
      udf3 || '',
      udf2 || '',
      udf1 || '',
      email || '',
      firstname || '',
      productinfo || '',
      amount || '',
      txnid || '',
      merchantKey,
    ].join('|');

    const computedHash = await sha512(responseHashString);
    const hashValid = computedHash === (hash || '');

    if (status === 'success' && txnid && hashValid) {
      const successUrl = `${siteUrl}/support?status=success&txnid=${txnid}&amount=${amount || ''}&mihpayid=${mihpayid || ''}`;
      return new Response(
        `<script>window.location.replace(${JSON.stringify(successUrl)});</script>`,
        { status: 200, headers: { 'Content-Type': 'text/html' } }
      );
    }

    const failureUrl = `${siteUrl}/support?status=failure&txnid=${txnid || ''}`;
    return new Response(
      `<script>window.location.replace(${JSON.stringify(failureUrl)});</script>`,
      { status: 200, headers: { 'Content-Type': 'text/html' } }
    );
  } catch {
    const siteUrl = import.meta.env.SITE_URL || 'https://saranshkawadkar.dev';
    return new Response(
      `<script>window.location.replace(${JSON.stringify(`${siteUrl}/support?status=error`)});</script>`,
      { status: 200, headers: { 'Content-Type': 'text/html' } }
    );
  }
}

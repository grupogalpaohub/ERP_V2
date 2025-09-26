const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const ENV_TENANT = process.env.TENANT_ID;
export const FIXED_TENANT_ID =
  ENV_TENANT && UUID_RE.test(ENV_TENANT)
    ? ENV_TENANT
    : 'd492fc25-cc24-4a27-b755-41d30179e823';
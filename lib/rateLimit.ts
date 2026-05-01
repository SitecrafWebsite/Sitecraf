interface RateLimitOptions {
  max?: number;
  windowMs?: number;
  bucket?: string;
}

interface RateLimitResult {
  allowed: boolean;
  retryAfter: number;
}

const buckets = new Map<string, Map<string, { count: number; resetAt: number }>>();

export function checkRateLimit(
  ip: string,
  options: RateLimitOptions = {}
): RateLimitResult {
  const {
    max = 10,
    windowMs = 60 * 1000,
    bucket = 'default',
  } = options;

  if (!buckets.has(bucket)) {
    buckets.set(bucket, new Map());
  }

  const ipMap = buckets.get(bucket)!;
  const now = Date.now();
  const record = ipMap.get(ip);

  if (!record || now > record.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (record.count >= max) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true, retryAfter: 0 };
}
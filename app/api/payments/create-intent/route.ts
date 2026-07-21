export async function POST(request: Request) {
  try {
    const { amount, metadata } = await request.json();

    // Mock Stripe payment intent
    // In production, use real Stripe API
    const clientSecret = `pi_${Math.random().toString(36).substring(2)}`;

    return Response.json({
      clientSecret,
      amount,
      metadata,
    });
  } catch (error) {
    return Response.json(
      { error: 'Payment creation failed' },
      { status: 500 }
    );
  }
}

const Refund = () => {
    return (
        <section id="refund-policy" className="py-20 bg-[#1f2430] bg-card/30 relative overflow-hidden min-h-screen">
            <div className="container mx-auto max-w-5xl relative px-4">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center bg-linear-to-r from-[#FBBF24] to-white bg-clip-text text-transparent">
                    Refund & Cancellation Policy
                </h2>

                {/* Policy Card */}
                <div className="border border-[#e0c273] rounded-xl bg-white/5 backdrop-blur-sm p-8 md:p-12 text-white space-y-8">

                    {/* Section 1 */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FBBF24]">
                            1. Digital Credits
                        </h3>
                        <p className="text-foreground leading-relaxed">
                            Since Clarity Cosmos provides digital AI credits that are consumed upon use,
                            we generally do not offer refunds once a video generation has been initiated.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FBBF24]">
                            2. Technical Failures
                        </h3>
                        <p className="text-foreground leading-relaxed">
                            If a payment is successful but credits are not assigned due to a technical error,
                            please contact us at{" "}
                            <a className="text-[#FBBF24]">mehdinaqvii@claritycosmos.com</a> with your transaction ID.
                            We will manually assign the credits within 24 hours.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FBBF24]">
                            3. Subscription Cancellation
                        </h3>
                        <p className="text-foreground leading-relaxed">
                            For the Beta phase, payments are one-time. There are no recurring
                            subscriptions to cancel at this stage.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Refund;

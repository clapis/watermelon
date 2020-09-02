export const actions = {
    checkout({ rootGetters }, listing) {

        const config = this.$config;

        return this.$axios.$post("jobs", listing)
            .then(result => {
                let product = rootGetters['products/id'](listing.product);

                if (!product.sku) return;

                return _checkout(product, result.id, config)
            });

    },
}

function _checkout(product, reference, config) {

    let stripe = Stripe(config.stripeKey);

    return stripe
        .redirectToCheckout({
            clientReferenceId: reference.toString(),
            items: [{ sku: product.sku, quantity: 1 }],
            successUrl: `${config.publicUrl}`,
            cancelUrl: `${config.publicUrl}`,
        })
        .then(function (result) {

            console.log('redirectToCheckout result:', result);

            if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                // var displayError = document.getElementById('error-message');
                // displayError.textContent = result.error.message;
                console.log("error stripe:" + result.error.message);
            }
        });
}


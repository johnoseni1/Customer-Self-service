
const makePayment = (transaction_ref) =>{
    // ENABLE THE SUCCESS PAGE
    localStorage.setItem("_openSuccess", true)

    // GET BENEFICIARY NUMBER FROM THE LOCAL STORAGE
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    const retrieveReceiptEmail = localStorage.getItem("_receipt_email")

    // GET PURCHASE DETAILS FROM THE LOCAL STORAGE
    const  { price, bundleName, value} = JSON.parse(localStorage.getItem("_bundle"))
    FlutterwaveCheckout({
        public_key: "FLWPUBK-661bb951ce002f066736b4576f5340ce-X",
        tx_ref: transaction_ref,
        amount: price,
        currency: "NGN",
        country: "NG",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: // REDIRECT TO SUCCESS PAGE
        "./../../../public/success.html",
        customer: {
            email: retrieveReceiptEmail,
            phone_number: retrieveBeneficiaryNumber,
            name: retrieveBeneficiaryNumber,
        },
        callback: function (data) {
            localStorage.clear()
        },
        onclose: function() {
        // WHAT SHOULD HAPPEN WHEN THE MODAL CLOSES
        },
        customizations: {
            title: "John Oseni Service",
            description: `Payment of ${price} for ${bundleName} ${value}`,
        },
    });
}
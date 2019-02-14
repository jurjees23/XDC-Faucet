module.exports = function (app) {
	var EthereumTx = app.EthereumTx;
	var generateErrorResponse = app.generateErrorResponse;
	var config = app.config;
	var configureWeb3 = app.configureWeb3;
	var validateCaptcha = app.validateCaptcha;

	app.post('/', function(request, response) {
		var recaptureResponse = request.body.captcha;
		//if (!recaptureResponse) return generateErrorResponse(response, {code: 500, title: "Error", message: "Invalid captcha"});

		var receiver = request.body.receiver;
		validateCaptcha(recaptureResponse, function(err, out) {
			validateCaptchaResponse(err, out, receiver, response);
		});
	});

	function validateCaptchaResponse(err, out, receiver, response) {
		//if (!out) return generateErrorResponse(response, {code: 500, title: "Error", message: "Invalid captcha"});
		//if (!out.success) return generateErrorResponse(response, {code: 500, title: "Error", message: "Invalid captcha"});

		configureWeb3(config, function(err, web3) {
			configureWeb3Response(err, web3, receiver, response);
		});
	}

	function configureWeb3Response(err, web3, receiver, response) {
		if (err) return generateErrorResponse(response, err);

		.	
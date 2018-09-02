// config used by server side only
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'taiaifang';
const dbUser = process.env.DB_USER || 'taiaifang_user';
const dbPass = process.env.DB_PASS || '1qaz2WSX3edc4RFV';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

const dbUrl =
	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `http://localhost:5001/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `http://localhost:5001/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: `http://localhost:5000`,

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: 5001,
	storeListenPort: 5000,

	// used by API
	mongodbServerUrl: dbUrl,

	smtpServer: {
		host: '',
		port: 0,
		secure: true,
		user: '',
		pass: '',
		fromName: '',
		fromAddress: ''
	},

	// key to sign tokens
	jwtSecretKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiYWRtaW4iLCJkYXNoYm9hcmQiLCJyZWFkOmN1c3RvbWVyX2dyb3VwcyIsInJlYWQ6Y3VzdG9tZXJzIiwicmVhZDpmaWxlcyIsInJlYWQ6b3JkZXJfc3RhdHVzZXMiLCJyZWFkOm9yZGVycyIsInJlYWQ6cGFnZXMiLCJyZWFkOnBheW1lbnRfbWV0aG9kcyIsInJlYWQ6cHJvZHVjdF9jYXRlZ29yaWVzIiwicmVhZDpwcm9kdWN0cyIsInJlYWQ6c2V0dGluZ3MiLCJyZWFkOnNoaXBwaW5nX21ldGhvZHMiLCJyZWFkOnNpdGVtYXAiLCJyZWFkOnRoZW1lIiwid3JpdGU6Y3VzdG9tZXJfZ3JvdXBzIiwid3JpdGU6Y3VzdG9tZXJzIiwid3JpdGU6ZmlsZXMiLCJ3cml0ZTpvcmRlcl9zdGF0dXNlcyIsIndyaXRlOm9yZGVycyIsIndyaXRlOnBhZ2VzIiwid3JpdGU6cGF5bWVudF9tZXRob2RzIiwid3JpdGU6cHJvZHVjdF9jYXRlZ29yaWVzIiwid3JpdGU6cHJvZHVjdHMiLCJ3cml0ZTpzZXR0aW5ncyIsIndyaXRlOnNoaXBwaW5nX21ldGhvZHMiLCJ3cml0ZTp0aGVtZSJdLCJqdGkiOiI1YjhiNTU2MjBiY2UzODJkMzhiYTM0NGQiLCJlbWFpbCI6InNlcnZpY2VAdGFpYWlmYW5nLmNvbSIsImlhdCI6MTUzNTg1ODAxOCwiZXhwIjoxNTM2Mzc2NDE4fQ.HDOTbfm2MU5F6mQVVZyzcak7OB8XWxdWaT3ms240X0w',

	// key to sign store cookies
	cookieSecretKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiYWRtaW4iLCJkYXNoYm9hcmQiLCJyZWFkOmN1c3RvbWVyX2dyb3VwcyIsInJlYWQ6Y3VzdG9tZXJzIiwicmVhZDpmaWxlcyIsInJlYWQ6b3JkZXJfc3RhdHVzZXMiLCJyZWFkOm9yZGVycyIsInJlYWQ6cGFnZXMiLCJyZWFkOnBheW1lbnRfbWV0aG9kcyIsInJlYWQ6cHJvZHVjdF9jYXRlZ29yaWVzIiwicmVhZDpwcm9kdWN0cyIsInJlYWQ6c2V0dGluZ3MiLCJyZWFkOnNoaXBwaW5nX21ldGhvZHMiLCJyZWFkOnNpdGVtYXAiLCJyZWFkOnRoZW1lIiwid3JpdGU6Y3VzdG9tZXJfZ3JvdXBzIiwid3JpdGU6Y3VzdG9tZXJzIiwid3JpdGU6ZmlsZXMiLCJ3cml0ZTpvcmRlcl9zdGF0dXNlcyIsIndyaXRlOm9yZGVycyIsIndyaXRlOnBhZ2VzIiwid3JpdGU6cGF5bWVudF9tZXRob2RzIiwid3JpdGU6cHJvZHVjdF9jYXRlZ29yaWVzIiwid3JpdGU6cHJvZHVjdHMiLCJ3cml0ZTpzZXR0aW5ncyIsIndyaXRlOnNoaXBwaW5nX21ldGhvZHMiLCJ3cml0ZTp0aGVtZSJdLCJqdGkiOiI1YjhiNTU2MjBiY2UzODJkMzhiYTM0NGQiLCJlbWFpbCI6InNlcnZpY2VAdGFpYWlmYW5nLmNvbSIsImlhdCI6MTUzNTg1ODAxOCwiZXhwIjoxNTM2Mzc2NDE4fQ.HDOTbfm2MU5F6mQVVZyzcak7OB8XWxdWaT3ms240X0w',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'zh_CN',

	// used by API
	orderStartNumber: 10000,

	developerMode: false
};

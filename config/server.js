// config used by server side only
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'shop';
const dbUser = process.env.DB_USER || 'taorai';
const dbPass = process.env.DB_PASS || '1q2w3e4r';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

const dbUrl =
	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `http://localhost:3001/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `http://localhost:3001/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: `http://localhost:3000`,

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: 3001,
	storeListenPort: 3000,

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
	jwtSecretKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiYWRtaW4iLCJkYXNoYm9hcmQiLCJyZWFkOmN1c3RvbWVyX2dyb3VwcyIsInJlYWQ6Y3VzdG9tZXJzIiwicmVhZDpmaWxlcyIsInJlYWQ6b3JkZXJfc3RhdHVzZXMiLCJyZWFkOm9yZGVycyIsInJlYWQ6cGFnZXMiLCJyZWFkOnBheW1lbnRfbWV0aG9kcyIsInJlYWQ6cHJvZHVjdF9jYXRlZ29yaWVzIiwicmVhZDpwcm9kdWN0cyIsInJlYWQ6c2V0dGluZ3MiLCJyZWFkOnNoaXBwaW5nX21ldGhvZHMiLCJyZWFkOnNpdGVtYXAiLCJyZWFkOnRoZW1lIiwid3JpdGU6Y3VzdG9tZXJfZ3JvdXBzIiwid3JpdGU6Y3VzdG9tZXJzIiwid3JpdGU6ZmlsZXMiLCJ3cml0ZTpvcmRlcl9zdGF0dXNlcyIsIndyaXRlOm9yZGVycyIsIndyaXRlOnBhZ2VzIiwid3JpdGU6cGF5bWVudF9tZXRob2RzIiwid3JpdGU6cHJvZHVjdF9jYXRlZ29yaWVzIiwid3JpdGU6cHJvZHVjdHMiLCJ3cml0ZTpzZXR0aW5ncyIsIndyaXRlOnNoaXBwaW5nX21ldGhvZHMiLCJ3cml0ZTp0aGVtZSJdLCJqdGkiOiI1YjY0Mzk2OGE4MTUyYTI2ZTBlOTNmMzUiLCJlbWFpbCI6InNlcnZpY2VAdGFvcmFpLmFzaWEiLCJpYXQiOjE1MzMyOTQ5NTIsImV4cCI6MTUzMzU1NDE1Mn0.LoYpKGvRC9yxipzTGck-Jha9uJXuPdcdciHbX9e6N7g',

	// key to sign store cookies
	cookieSecretKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiYWRtaW4iLCJkYXNoYm9hcmQiLCJyZWFkOmN1c3RvbWVyX2dyb3VwcyIsInJlYWQ6Y3VzdG9tZXJzIiwicmVhZDpmaWxlcyIsInJlYWQ6b3JkZXJfc3RhdHVzZXMiLCJyZWFkOm9yZGVycyIsInJlYWQ6cGFnZXMiLCJyZWFkOnBheW1lbnRfbWV0aG9kcyIsInJlYWQ6cHJvZHVjdF9jYXRlZ29yaWVzIiwicmVhZDpwcm9kdWN0cyIsInJlYWQ6c2V0dGluZ3MiLCJyZWFkOnNoaXBwaW5nX21ldGhvZHMiLCJyZWFkOnNpdGVtYXAiLCJyZWFkOnRoZW1lIiwid3JpdGU6Y3VzdG9tZXJfZ3JvdXBzIiwid3JpdGU6Y3VzdG9tZXJzIiwid3JpdGU6ZmlsZXMiLCJ3cml0ZTpvcmRlcl9zdGF0dXNlcyIsIndyaXRlOm9yZGVycyIsIndyaXRlOnBhZ2VzIiwid3JpdGU6cGF5bWVudF9tZXRob2RzIiwid3JpdGU6cHJvZHVjdF9jYXRlZ29yaWVzIiwid3JpdGU6cHJvZHVjdHMiLCJ3cml0ZTpzZXR0aW5ncyIsIndyaXRlOnNoaXBwaW5nX21ldGhvZHMiLCJ3cml0ZTp0aGVtZSJdLCJqdGkiOiI1YjY0Mzk2OGE4MTUyYTI2ZTBlOTNmMzUiLCJlbWFpbCI6InNlcnZpY2VAdGFvcmFpLmFzaWEiLCJpYXQiOjE1MzMyOTQ5NTIsImV4cCI6MTUzMzU1NDE1Mn0.LoYpKGvRC9yxipzTGck-Jha9uJXuPdcdciHbX9e6N7g',

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
	language: 'en',

	// used by API
	orderStartNumber: 10000,

	developerMode: false
};

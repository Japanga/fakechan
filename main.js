<!-- Start writing your code here -->
// --- Utility Functions ---

function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

function base64ToArrayBuffer(base64) {
    const binary = window.atob(base64.replace(/-/g, '+').replace(/_/g, '/'));
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}

function displayMessage(message, type) {
    const statusDiv = document.getElementById('status-message');
    statusDiv.textContent = message;
    statusDiv.className = `status-message ${type}`;
}

// --- WebAuthn Registration ---

document.getElementById('register-btn').addEventListener('click', async () => {
    const username = document.getElementById('reg-username').value;
    if (!username) {
        displayMessage('Username is required for registration.', 'error');
        return;
    }

    try {
        // 1. Request options from your server (e.g., via a POST request to '/generate-registration-options')
        // This is a mock response; you must implement a real server endpoint.
        const optionsResponse = {
            challenge: 'EXAMPLE_CHALLENGE',
            rp: { name: 'My App', id: window.location.hostname },
            user: { id: 'USER_ID_FROM_SERVER', name: username, displayName: username },
            pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
            authenticatorSelection: { authenticatorAttachment: 'cross-platform', userVerification: 'preferred' },
            timeout: 60000,
            attestation: 'direct'
        };

        // Modify the options for WebAuthn API
        optionsResponse.challenge = base64ToArrayBuffer(optionsResponse.challenge);
        optionsResponse.user.id = base64ToArrayBuffer(optionsResponse.user.id);

        // 2. Call the WebAuthn API to create a new credential
        const credential = await navigator.credentials.create({
            publicKey: optionsResponse
        });

        const credentialId = arrayBufferToBase64(credential.rawId);
        const attestationObject = arrayBufferToBase64(credential.response.attestationObject);
        const clientDataJSON = arrayBufferToBase64(credential.response.clientDataJSON);

        // 3. Send the credential back to your server for verification and storage
        // This is where you would send a POST request to your server (e.g., '/verify-registration')
        // to save the public key.
        console.log('Registration successful:', { credentialId, attestationObject, clientDataJSON });
        displayMessage('Registration successful! Check your browser prompt.', 'success');

    } catch (error) {
        console.error('Registration failed:', error);
        displayMessage(`Registration failed: ${error.message}`, 'error');
    }
});


// --- WebAuthn Sign-in ---

document.getElementById('signin-btn').addEventListener('click', async () => {
    const username = document.getElementById('signin-username').value;
    if (!username) {
        displayMessage('Username is required for sign-in.', 'error');
        return;
    }

    try {
        // 1. Request authentication options from your server (e.g., '/generate-authentication-options')
        // This is a mock response; you must implement a real server endpoint.
        const optionsResponse = {
            challenge: 'EXAMPLE_CHALLENGE',
            rpId: window.location.hostname,
            allowCredentials: [{
                id: 'CREDENTIAL_ID_FROM_SERVER',
                type: 'public-key'
            }],
            userVerification: 'preferred',
            timeout: 60000,
        };
        
        // Modify the options for WebAuthn API
        optionsResponse.challenge = base64ToArrayBuffer(optionsResponse.challenge);
        if (optionsResponse.allowCredentials[0].id) {
            optionsResponse.allowCredentials[0].id = base64ToArrayBuffer(optionsResponse.allowCredentials[0].id);
        }

        // 2. Call the WebAuthn API to get the credential
        const assertion = await navigator.credentials.get({
            publicKey: optionsResponse
        });

        const credentialId = arrayBufferToBase64(assertion.rawId);
        const authenticatorData = arrayBufferToBase64(assertion.response.authenticatorData);
        const clientDataJSON = arrayBufferToBase64(assertion.response.clientDataJSON);
        const signature = arrayBufferToBase64(assertion.response.signature);

        // 3. Send the assertion back to your server for verification
        // This is where you would send a POST request to your server (e.g., '/verify-authentication')
        // to verify the signature against the stored public key.
        console.log('Authentication successful:', { credentialId, authenticatorData, clientDataJSON, signature });
        displayMessage('Sign-in successful!', 'success');

    } catch (error) {
        console.error('Authentication failed:', error);
        displayMessage(`Sign-in failed: ${error.message}`, 'error');
    }
});
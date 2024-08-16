
async function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('apiToken').value;

    const formData = new FormData();
    formData.append('idInstance', idInstance);
    formData.append('apiToken', apiToken);

    try {
        const response = await fetch('/getSettings', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        document.getElementById('responseArea').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('responseArea').innerText = `Error: ${error.message}`;
    }
}


async function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('apiToken').value;

    const formData = new FormData();
    formData.append('idInstance', idInstance);
    formData.append('apiToken', apiToken);

    try {
        const response = await fetch('/getStateInstance', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        document.getElementById('responseArea').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('responseArea').innerText = `Error: ${error.message}`;
    }
}


async function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('apiToken').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    const formData = new FormData();
    formData.append('idInstance', idInstance);
    formData.append('apiToken', apiToken);
    formData.append('phoneNumber', phoneNumber);
    formData.append('message', message);

    try {
        const response = await fetch('/sendMessage', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        document.getElementById('responseArea').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('responseArea').innerText = `Error: ${error.message}`;
    }
}


async function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('apiToken').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fileUrl = document.getElementById('fileUrl').value;

    const formData = new FormData();
    formData.append('idInstance', idInstance);
    formData.append('apiToken', apiToken);
    formData.append('phoneNumber', phoneNumber);
    formData.append('fileUrl', fileUrl);

    try {
        const response = await fetch('/sendFileByUrl', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        document.getElementById('responseArea').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('responseArea').innerText = `Error: ${error.message}`;
    }
}

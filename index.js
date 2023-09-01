import http from 'http'; // Importing the http module
const PORT = 8080; // Defining the port on which the server will run

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Header of the response
    //Body of the response
    res.write(`
    ##         .
## ## ##        ==
## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\______ O           __/
\\    \\         __/
\\____\\_______/


Hello from Docker!
`)
    res.end('Done the stream'); // Ending the response
}).listen(PORT, () => { // Listening on port 8080
    console.log(`Server running at http://localhost:${PORT}/`);
});
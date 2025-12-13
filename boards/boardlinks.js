//boardlinks.js
// This function fills the specified div with a paragraph and links
function fillDivWithLinks() {
    // 1. Get the target div element by its ID
    const contentDiv = document.getElementById('content-area');

    // Optional: Clear the div if it might have existing content
    contentDiv.innerHTML = '';

    // 2. Create the paragraph element
    const paragraph = document.createElement('p');

    // 3. Create text and link nodes and append them to the paragraph
    paragraph.appendChild(document.createTextNode('['));

    const link1 = document.createElement('a');
    link1.href = 'https://japanga.github.io/fakechan/boards/a';
    link1.textContent = '/a/';
   link1.innerHTML = '<b>/a/</b>';
    link1.target = '_blank'; // Opens link in a new tab
    paragraph.appendChild(link1);

    paragraph.appendChild(document.createTextNode(' - '));

    const link2 = document.createElement('a');
    link2.href = 'https://japanga.github.io/fakechan/boards/an';
    link2.textContent = '/an/';
    link2.innerHTML = '<b>/an/</b>';
    link2.target = '_blank';
    paragraph.appendChild(link2);

       paragraph.appendChild(document.createTextNode(' - '));

      const link3 = document.createElement('a');
    link3.href = 'https://japanga.github.io/fakechan/boards/b';
    link3.textContent = '/b/';
    link3.innerHTML = '<b>/b/</b>';
    link3.target = '_blank';
    paragraph.appendChild(link3);

       paragraph.appendChild(document.createTextNode(' - '));

    // 4. Append the fully constructed paragraph to the div
    contentDiv.appendChild(paragraph);
}

// Call the function automatically when the script runs (which is after the div is loaded)
fillDivWithLinks();

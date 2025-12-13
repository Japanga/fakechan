//boardlinks.js
/**
 * Fills the 'targetDiv' with a new paragraph element.
 */
// This function fetches links from a text file and inserts them into the page.
// Data for the links
const linksData = [
    { text: "/a/", url: "https://japanga.github.io/fakechan/boards/a" },
    { text: "/an/", url: "https://japanga.github.io/fakechan/boards/an" },
    { text: "/b/", url: "https://japanga.github.io/fakechan/boards/b" },
    { text: "/co/", url: "https://japanga.github.io/fakechan/boards/co" },
     { text: "/c/", url: "https://japanga.github.io/fakechan/boards/c" },
     { text: "/ck/", url: "https://japanga.github.io/fakechan/boards/ck" },
     { text: "/dbs/", url: "https://japanga.github.io/fakechan/boards/dbs" },
     { text: "/get/", url: "https://japanga.github.io/fakechan/boards/get" },
     { text: "/gif/", url: "https://japanga.github.io/fakechan/boards/gif" },
     { text: "/h/", url: "https://japanga.github.io/fakechan/boards/h" },
     { text: "/hc/", url: "https://japanga.github.io/fakechan/boards/hc" },
     { text: "/hyb/", url: "https://japanga.github.io/fakechan/boards/hyb" },
     { text: "/lit/", url: "https://japanga.github.io/fakechan/boards/lit" },
     { text: "/x/", url: "https://japanga.github.io/fakechan/boards/x" },
     { text: "/m/", url: "https://japanga.github.io/fakechan/boards/m" },
     { text: "/mu/", url: "https://japanga.github.io/fakechan/boards/mu" },
     { text: "/v/", url: "https://japanga.github.io/fakechan/boards/v" },
     { text: "/vid/", url: "https://japanga.github.io/fakechan/boards/vid" },
     { text: "/tv/", url: "https://japanga.github.io/fakechan/boards/tv" },
     { text: "/pol/", url: "https://japanga.github.io/fakechan/boards/pol" },
     { text: "/p/", url: "https://japanga.github.io/fakechan/boards/p" },
     { text: "/qa/", url: "https://japanga.github.io/fakechan/boards/qa" },
     { text: "/sp/", url: "https://japanga.github.io/fakechan/boards/sp" },
     { text: "/jp/", url: "https://japanga.github.io/fakechan/boards/jp" },
     { text: "/w/", url: "https://japanga.github.io/fakechan/boards/w" },
     { text: "/wg/", url: "https://japanga.github.io/fakechan/boards/wg" },
     { text: "/wsg/", url: "https://japanga.github.io/fakechan/boards/wsg" },
     { text: "/pw/", url: "https://japanga.github.io/fakechan/boards/pw" },
     { text: "/news/", url: "https://japanga.github.io/fakechan/boards/news" }
];

// Get the target div element by its ID
const container = document.getElementById('link-container');

// Function to generate and insert the links
function populateLinks() {
    let htmlContent = '['; // Start an unordered list

    // Loop through the data and create link elements
    linksData.forEach(link => {
        htmlContent += `- <b><a href="${link.url}">${link.text}</a></b>`;
    });

    htmlContent += ']'; // End the list

    // Set the innerHTML of the div to the generated content
    if (container) {
        container.innerHTML = htmlContent;
    } else {
        console.error("Link container element not found!");
    }
}

// Call the function to populate the div when the script runs
populateLinks();

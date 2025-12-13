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

                                   const link4 = document.createElement('a');
    link4.href = 'https://japanga.github.io/fakechan/boards/co';
    link4.textContent = '/co/';
    link4.innerHTML = '<b>/co/</b>';
    link4.target = '_blank';
    paragraph.appendChild(link4);

       paragraph.appendChild(document.createTextNode(' - '));

        const link5 = document.createElement('a');
    link5.href = 'https://japanga.github.io/fakechan/boards/c';
    link5.textContent = '/c/';
    link5.innerHTML = '<b>/c/</b>';
    link5.target = '_blank';
    paragraph.appendChild(link5);

       paragraph.appendChild(document.createTextNode(' - '));

       const link6 = document.createElement('a');
    link6.href = 'https://japanga.github.io/fakechan/boards/ck';
    link6.textContent = '/ck/';
    link6.innerHTML = '<b>/ck/</b>';
    link6.target = '_blank';
    paragraph.appendChild(link6);

       paragraph.appendChild(document.createTextNode(' - '));

     const link7 = document.createElement('a');
    link7.href = 'https://japanga.github.io/fakechan/boards/dbs';
    link7.textContent = '/dbs/';
    link7.innerHTML = '<b>/dbs/</b>';
    link7.target = '_blank';
    paragraph.appendChild(link7);

       paragraph.appendChild(document.createTextNode(' - '));

    
     const link8 = document.createElement('a');
    link8.href = 'https://japanga.github.io/fakechan/boards/get';
    link8.textContent = '/get/';
    link8.innerHTML = '<b>/get/</b>';
    link8.target = '_blank';
    paragraph.appendChild(link8);

       paragraph.appendChild(document.createTextNode(' - '));

         const link9 = document.createElement('a');
    link9.href = 'https://japanga.github.io/fakechan/boards/gif';
    link9.textContent = '/get/';
    link9.innerHTML = '<b>/get/</b>';
    link9.target = '_blank';
    paragraph.appendChild(link9);

       paragraph.appendChild(document.createTextNode(' - '));

       const link9 = document.createElement('a');
    link9.href = 'https://japanga.github.io/fakechan/boards/gif';
    link9.textContent = '/gif/';
    link9.innerHTML = '<b>/gif/</b>';
    link9.target = '_blank';
    paragraph.appendChild(link9);

       paragraph.appendChild(document.createTextNode(' - '));

        const link10 = document.createElement('a');
    link10.href = 'https://japanga.github.io/fakechan/boards/h';
    link10.textContent = '/h/';
    link10.innerHTML = '<b>/h/</b>';
    link10.target = '_blank';
    paragraph.appendChild(link10);

       paragraph.appendChild(document.createTextNode(' - '));

      const link11 = document.createElement('a');
    link11.href = 'https://japanga.github.io/fakechan/boards/hc';
    link11.textContent = '/hc/';
    link11.innerHTML = '<b>/hc/</b>';
    link11.target = '_blank';
    paragraph.appendChild(link11);

       paragraph.appendChild(document.createTextNode(' - '));

    
      const link12 = document.createElement('a');
    link12.href = 'https://japanga.github.io/fakechan/boards/hyb';
    link12.textContent = '/hyb/';
    link12.innerHTML = '<b>/hyb/</b>';
    link12.target = '_blank';
    paragraph.appendChild(link12);

       paragraph.appendChild(document.createTextNode(' - '));

        const link13 = document.createElement('a');
    link13.href = 'https://japanga.github.io/fakechan/boards/lit';
    link13.textContent = '/lit/';
    link13.innerHTML = '<b>/lit/</b>';
    link13.target = '_blank';
    paragraph.appendChild(link13);

       paragraph.appendChild(document.createTextNode(' - '));

       const link14 = document.createElement('a');
    link14.href = 'https://japanga.github.io/fakechan/boards/x';
    link14.textContent = '/x/';
    link14.innerHTML = '<b>/x/</b>';
    link14.target = '_blank';
    paragraph.appendChild(link14);

       paragraph.appendChild(document.createTextNode(' - '));

        const link15 = document.createElement('a');
    link15.href = 'https://japanga.github.io/fakechan/boards/m';
    link15.textContent = '/m/';
    link15.innerHTML = '<b>/m/</b>';
    link15.target = '_blank';
    paragraph.appendChild(link15);

       paragraph.appendChild(document.createTextNode(' - '));

    const link16 = document.createElement('a');
    link16.href = 'https://japanga.github.io/fakechan/boards/mu';
    link16.textContent = '/mu/';
    link16.innerHTML = '<b>/mu/</b>';
    link16.target = '_blank';
    paragraph.appendChild(link16);

       paragraph.appendChild(document.createTextNode(' - '));

     const link17 = document.createElement('a');
    link17.href = 'https://japanga.github.io/fakechan/boards/v';
    link17.textContent = '/v/';
    link17.innerHTML = '<b>/v/</b>';
    link17.target = '_blank';
    paragraph.appendChild(link17);

       paragraph.appendChild(document.createTextNode(' - '));

      const link18 = document.createElement('a');
    link18.href = 'https://japanga.github.io/fakechan/boards/vid';
    link18.textContent = '/vid/';
    link18.innerHTML = '<b>/vid/</b>';
    link18.target = '_blank';
    paragraph.appendChild(link18);

       paragraph.appendChild(document.createTextNode(' - '));

       const link19 = document.createElement('a');
    link19.href = 'https://japanga.github.io/fakechan/boards/tv';
    link19.textContent = '/tv/';
    link19.innerHTML = '<b>/tv/</b>';
    link19.target = '_blank';
    paragraph.appendChild(link19);

       paragraph.appendChild(document.createTextNode(' - '));

     const link20 = document.createElement('a');
    link20.href = 'https://japanga.github.io/fakechan/boards/pol';
    link20.textContent = '/pol/';
    link20.innerHTML = '<b>/pol/</b>';
    link20.target = '_blank';
    paragraph.appendChild(link20);

       paragraph.appendChild(document.createTextNode(' - '));

         const link21 = document.createElement('a');
    link21.href = 'https://japanga.github.io/fakechan/boards/p';
    link21.textContent = '/p/';
    link21.innerHTML = '<b>/p/</b>';
    link21.target = '_blank';
    paragraph.appendChild(link21);

       paragraph.appendChild(document.createTextNode(' - '));

    
         const link22 = document.createElement('a');
    link22.href = 'https://japanga.github.io/fakechan/boards/qa';
    link22.textContent = '/qa/';
    link22.innerHTML = '<b>/qa/</b>';
    link22.target = '_blank';
    paragraph.appendChild(link22);

       paragraph.appendChild(document.createTextNode(' - '));

             const link23 = document.createElement('a');
    link23.href = 'https://japanga.github.io/fakechan/boards/sp';
    link23.textContent = '/sp/';
    link23.innerHTML = '<b>/sp/</b>';
    link23.target = '_blank';
    paragraph.appendChild(link23);

       paragraph.appendChild(document.createTextNode(' - '));


       const link24 = document.createElement('a');
    link24.href = 'https://japanga.github.io/fakechan/boards/jp';
    link24.textContent = '/jp/';
    link24.innerHTML = '<b>/jp/</b>';
    link24.target = '_blank';
    paragraph.appendChild(link24);

       paragraph.appendChild(document.createTextNode(' - '));

           const link25 = document.createElement('a');
    link25.href = 'https://japanga.github.io/fakechan/boards/w';
    link25.textContent = '/w/';
    link25.innerHTML = '<b>/w/</b>';
    link25.target = '_blank';
    paragraph.appendChild(link25);

       paragraph.appendChild(document.createTextNode(' - '));

      const link26 = document.createElement('a');
    link26.href = 'https://japanga.github.io/fakechan/boards/wg';
    link26.textContent = '/wg/';
    link26.innerHTML = '<b>/wg/</b>';
    link26.target = '_blank';
    paragraph.appendChild(link26);

       paragraph.appendChild(document.createTextNode(' - '));

      const link27 = document.createElement('a');
    link27.href = 'https://japanga.github.io/fakechan/boards/wsg';
    link27.textContent = '/wsg/';
    link27.innerHTML = '<b>/wsg/</b>';
    link27.target = '_blank';
    paragraph.appendChild(link27);

       paragraph.appendChild(document.createTextNode(' - '));

         const link28 = document.createElement('a');
    link28.href = 'https://japanga.github.io/fakechan/boards/pw';
    link28.textContent = '/pw/';
    link28.innerHTML = '<b>/pw/</b>';
    link28.target = '_blank';
    paragraph.appendChild(link28);

       paragraph.appendChild(document.createTextNode(' - '));

      const link29 = document.createElement('a');
    link29.href = 'https://japanga.github.io/fakechan/boards/news';
    link29.textContent = '/news/';
    link29.innerHTML = '<b>/news/</b>';
    link29.target = '_blank';
    paragraph.appendChild(link29);

       paragraph.appendChild(document.createTextNode(' ] '));

       const link30 = document.createElement('a');
    link30.href = 'https://japanga.github.io/fakechan/';
    link30.textContent = 'Home';
    link30.innerHTML = '<b>Home</b>';
    link30.target = '_blank';
    paragraph.appendChild(link30);

       paragraph.appendChild(document.createTextNode(' - '));

        const link31 = document.createElement('a');
    link31.href = 'https://japanga.github.io/chadsofa/';
    link31.textContent = 'Wiki';
    link31.innerHTML = '<b>Wiki</b>';
    link31.target = '_blank';
    paragraph.appendChild(link31);

       paragraph.appendChild(document.createTextNode(' - '));

         const link32 = document.createElement('a');
    link32.href = 'https://japanga.github.io/fakechanarchive/';
    link32.textContent = 'Archive';
    link32.innerHTML = '<b>Archive</b>';
    link32.target = '_blank';
    paragraph.appendChild(link32);

       paragraph.appendChild(document.createTextNode(' - '));

      const link33 = document.createElement('a');
    link33.href = 'https://japanga.github.io/fakechan/boards/vpn';
    link33.textContent = 'VPN';
    link33.innerHTML = '<b>VPN</b>';
    link33.target = '_blank';
    paragraph.appendChild(link33);

       paragraph.appendChild(document.createTextNode(' - '));

    
      const link34 = document.createElement('a');
    link34.href = 'https://japanga.github.io/fakechan/faq';
    link34.textContent = 'FAQ';
    link34.innerHTML = '<b>FAQ</b>';
    link34.target = '_blank';
    paragraph.appendChild(link34);










    // 4. Append the fully constructed paragraph to the div
    contentDiv.appendChild(paragraph);
}

// Call the function automatically when the script runs (which is after the div is loaded)
fillDivWithLinks();

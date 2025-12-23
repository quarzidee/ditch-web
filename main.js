"use strict";

function showPage(pageId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('guestbook').style.display = 'none';
    document.getElementById('notes').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
  }







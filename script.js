'use strict';
const issueForm = document.getElementById('issue-form');
const issueInput = document.getElementById('issue-input');
const issueHistory = document.getElementById('issue-history');

issueForm.addEventListener('submit', (e) => {
    e.preventDefault();
    issueHistory.innerHTML += issueInput.value + '\n';
});

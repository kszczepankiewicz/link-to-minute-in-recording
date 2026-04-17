'use strict';
const URL = `https://www.google.com/search?&q=link+to+the+minute+in+a+recording+with+`;

const issueForm = document.getElementById('issue-form');
const issueInput = document.getElementById('issue-input');
const issueHistory = document.getElementById('issue-history');

const openUrl = (constantUrl, variableUrl) => window.open(constantUrl + variableUrl);

issueForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = issueInput;
    issueHistory.innerHTML += value + '\n';
    openUrl(URL, value);
});

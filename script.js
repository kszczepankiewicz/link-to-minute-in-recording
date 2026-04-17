'use strict';
const URL = `https://www.google.com/search?q=linki+do+minut+w+nagraniach`;
// const URL = `https://www.google.com/search?&q=link+to+the+minute+in+a+recording`;
const DEFAULT_SEPARATOR = 'gdzie';
// const DEFAULT_SEPARATOR = 'where';
const SEPARATORS = ['z', 'o', 'gdzie', 'opisujacej'];
// const SEPARATORS = ['with', 'where', 'on', 'addressing', 'about', 'describing'];


const issueForm = document.getElementById('issue-form');
const issueInput = document.getElementById('issue-input');
const issueHistory = document.getElementById('issue-history');
const issueSeparator = document.getElementById('issue-separator');

const openUrl = (constantUrl, variableUrl, separator = DEFAULT_SEPARATOR) => window.open(`${constantUrl} ${separator} ${variableUrl}`.replace(/ /g, '+'));

issueForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = issueInput;
    const separatorValue = issueSeparator.value.toLowerCase() || DEFAULT_SEPARATOR;
    issueHistory.innerHTML += separatorValue + ' ' + value + '\n';
    if (!SEPARATORS.includes(separatorValue)) {
        alert('Wrong separator');
        return;
    }
    openUrl(URL, value, separatorValue);
});

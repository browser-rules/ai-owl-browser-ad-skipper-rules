const ruleUrl = new URL("rules/browser-ad-skipper-rules.json", window.location.href).href;
const ruleUrlNode = document.querySelector("#ruleUrl");
const copyButton = document.querySelector("#copyRuleUrl");
const copyPrimaryButton = document.querySelector("#copyRuleUrlPrimary");
const copyLabel = document.querySelector("#copyLabel");
const copyPrimaryLabel = document.querySelector("#copyPrimaryLabel");
const downloadRule = document.querySelector("#downloadRule");
const openRuleJson = document.querySelector("#openRuleJson");

if (ruleUrlNode) {
  ruleUrlNode.textContent = ruleUrl;
}

if (downloadRule) {
  downloadRule.href = ruleUrl;
}

if (openRuleJson) {
  openRuleJson.href = ruleUrl;
}

function bindCopyRuleUrl(button, label) {
  if (!button) return;
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(ruleUrl);
    const labelNode = label || button;
    const originalText = labelNode.textContent;
    labelNode.textContent = "Copied";
    window.setTimeout(() => {
      labelNode.textContent = originalText;
    }, 1600);
  });
}

bindCopyRuleUrl(copyButton, copyLabel);
bindCopyRuleUrl(copyPrimaryButton, copyPrimaryLabel);

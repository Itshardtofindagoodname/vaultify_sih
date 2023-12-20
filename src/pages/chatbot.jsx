import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Ask me any doubts you have...",
        "botConversationDescription": "Hello! I am the general query bot for Vaultify",
        "botId": "1d44a350-5140-4e13-8a94-b7908e955558",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "1d44a350-5140-4e13-8a94-b7908e955558",
        "webhookId": "cf52c696-3290-4d06-bb7b-75d589f85e50",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Query Bot",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/a2e3ba5e-ff64-4a36-896f-80fc156f3111/v98250/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "theme": "prism",
        "themeColor": "#2563eb"
    });
    }
  }, [])
}
 
export default Chatbot
import { SwaggerCustomOptions } from "../interfaces/SwaggerCustomOptions"

export function SetupSwagger() : SwaggerCustomOptions{
    const customOptions: SwaggerCustomOptions = {
        customCss: `
              .topbar-wrapper svg { visibility: hidden; }
              .topbar-wrapper {
                display: block;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                content: url(data:image/png;base64,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);
                max-width: 100%;
                max-height: 100%;
                height: 50px;
            }
            .swagger-ui .topbar {
                background-color: #c2e0f2;
            }
            
            .topbar{
                border-bottom: 1px ;
                border-bottom-color: #c2e0f2;
            }
            .select-label{
                color:#c2e0f2;
            }
            title{
                color:#c2e0f2;
            }
            .swagger-ui a.nostyle, .swagger-ui a.nostyle:visited{
                color: #c2e0f2;
            }
            .swagger-ui svg{
                color: #c2e0f2;
                fill: #c2e0f2;
            }
            .swagger-ui .scheme-container .schemes {
                display:none;
            }
            .swagger-ui .copy-to-clipboard {
                background: #c2e0f2;
            }
            .swagger-ui a.nostyle{
                color:#c2e0f2;
            }
            .opblock-tag
            {
                color:#c2e0f2;
            }
            .swagger-ui .info .title{
                color:#c2e0f2;
                font-size:30px;
                font-weight: bold;
            }   
            .footer {
              
                position: fixed; /* Set footer position to fixed */
                bottom: 0; /* Align to the bottom of the viewport */
                left: 0; /* Align to the left edge */
                width: 100%; /* Set full width */
                background-color: #f8f9fa; /* Set background color */
                padding: 10px 0; /* Add padding */
                font-size: 15px;
                text-align: center;
                color: #c2e0f2;
                border-top: 1px solid #ccc; /* Add border to top */
                font-weight: bold;
            }
            `,
        customJsStr: `
              setTimeout(function() {
              var footer = document.createElement('div');
              footer.classList.add('footer');
              footer.innerText = 'Copyright © ' + new Date().getFullYear() + ' CloudMe Solutions ';
              var br = document.createElement('br');
              footer.appendChild(br);
    
              var teamText = document.createTextNode('CLM Team');
              footer.appendChild(teamText);
    
              var container = document.querySelector('.swagger-ui');
              if (container) {
                  container.appendChild(footer);
              }
                  else{
                  console.warn('container still null');
              }
              
              const divElements = document.querySelectorAll('.view-line-link.copy-to-clipboard');
              const windowHeight = window.innerHeight;
    
              divElements.forEach(divElement => {
                  divElement.addEventListener('click', function(event) {
                      const messageElement = document.createElement('div');
                      messageElement.textContent = \`The URL has been copied!\`;
                      messageElement.style.position = 'fixed';
                      const messageHeight = messageElement.offsetHeight;
                      messageElement.style.top = \`\${(windowHeight - messageHeight) / 2}px\`;
                      messageElement.style.left = '50%';
                      messageElement.style.transform = 'translateX(-50%)';
                      messageElement.style.color = '#fff';
                      messageElement.style.backgroundColor = '#c2e0f2';
                      messageElement.style.padding = '15px 20px';
                      messageElement.style.borderRadius = '5px';
                      messageElement.style.zIndex = '9999';
    
                      document.body.appendChild(messageElement);
    
                      setTimeout(function() {
                          messageElement.remove();
                      }, 2000);
                  });
              });
            }, 2000); // Adjust the delay (in milliseconds) as needed
                `
      }
      return customOptions;
}
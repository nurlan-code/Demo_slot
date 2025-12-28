// Chatbot Demo Functionality
(function() {
    'use strict';
    
    // Chatbot messages database
    const chatbotMessages = {
        greetings: [
            "Olá! 👋 Bem-vindo ao DemoSlots.pt! Como posso ajudar-te hoje?",
            "Olá! 🎰 Estou aqui para te ajudar a descobrir os melhores jogos e plataformas!",
            "Olá! 🎲 Em que posso ser útil hoje?"
        ],
        help: [
            "Posso ajudar-te com informações sobre jogos, bónus, torneios e muito mais! 🎮",
            "Estou aqui para responder às tuas perguntas sobre o site! 💬",
            "Podes perguntar-me sobre jogos, plataformas, bónus ou qualquer outra coisa! 🎯"
        ],
        games: [
            "Temos mais de 5,000 jogos disponíveis! 🎰 Vai à página de Jogos para explorar!",
            "Podes encontrar slots, jogos de mesa, live casino e muito mais! 🎲",
            "Usa os filtros na página de Jogos para encontrar o jogo perfeito para ti! ✨"
        ],
        bonuses: [
            "Temos bónus incríveis todos os dias! 🎁 Vê a página de Bónus para as últimas ofertas!",
            "Bónus grátis, free spins e muito mais esperam por ti! 💎",
            "Não percas os bónus exclusivos na página de Bónus! 🎉"
        ],
        tournaments: [
            "Participa nos nossos torneios e compete por prémios fantásticos! 🏆",
            "Torneios diários e semanais com prémios garantidos! 🎯",
            "Vê a página de Torneios para os eventos ativos! ⚡"
        ],
        platforms: [
            "Recomendamos as melhores plataformas de casino social! ⭐",
            "Vê o nosso ranking das melhores plataformas em Portugal! 🥇",
            "Todas as plataformas são 100% gratuitas e seguras! 🔒"
        ],
        encouragement: [
            "Continua a jogar e a explorar! Cada jogo é uma nova aventura! 🚀",
            "Não te esqueças de participar nos torneios para ganhares prémios! 🎁",
            "Explora novos jogos e descobre os teus favoritos! 💫",
            "Partilha a tua experiência na Comunidade! 👥",
            "Aproveita os bónus diários para maximizares a diversão! 🎰"
        ],
        default: [
            "Desculpa, não entendi. Podes reformular a pergunta? 🤔",
            "Podes perguntar sobre jogos, bónus, torneios ou plataformas! 💡",
            "Tenta perguntar de outra forma! Estou aqui para ajudar! 😊"
        ]
    };
    
    // Create chatbot HTML
    function createChatbot() {
        const chatbotHTML = `
            <div id="chatbotContainer" class="chatbot-container">
                <div id="chatbotWindow" class="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <span class="chatbot-avatar">🤖</span>
                            <div>
                                <div class="chatbot-name">DemoSlots Assistente</div>
                                <div class="chatbot-status">Online • Responde em segundos</div>
                            </div>
                        </div>
                        <button id="chatbotMinimize" class="chatbot-minimize">−</button>
                    </div>
                    <div id="chatbotMessages" class="chatbot-messages">
                        <div class="chatbot-message bot-message">
                            <span class="chatbot-avatar-small">🤖</span>
                            <div class="message-content">
                                Olá! 👋 Bem-vindo ao DemoSlots.pt! Sou o teu assistente virtual e estou aqui para te ajudar a descobrir os melhores jogos, bónus e plataformas. Como posso ajudar-te hoje?
                            </div>
                        </div>
                    </div>
                    <div class="chatbot-input-area">
                        <div class="quick-actions">
                            <button class="quick-btn" data-action="games">🎮 Jogos</button>
                            <button class="quick-btn" data-action="bonuses">🎁 Bónus</button>
                            <button class="quick-btn" data-action="tournaments">🏆 Torneios</button>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" id="chatbotInput" placeholder="Escreve a tua mensagem..." autocomplete="off">
                            <button id="chatbotSend" class="chatbot-send">📤</button>
                        </div>
                    </div>
                </div>
                <button id="chatbotToggle" class="chatbot-toggle">
                    <span class="chatbot-icon">💬</span>
                    <span class="chatbot-badge">1</span>
                </button>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        
        // Add chatbot styles
        const style = document.createElement('style');
        style.textContent = `
            .chatbot-container * {
                box-sizing: border-box;
            }

            .chatbot-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 10000;
                font-family: 'Poppins', sans-serif;
            }
            
            .chatbot-toggle {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #8B5CF6, #EC4899);
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                transition: all 0.3s;
                animation: pulse 2s infinite;
                z-index: 10002;
            }
            
            .chatbot-toggle:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 30px rgba(139, 92, 246, 0.6);
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            .chatbot-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #F59E0B;
                color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                border: 2px solid #0F172A;
            }
            
            .chatbot-window {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 380px;
                height: 600px;
                max-height: calc(100vh - 100px);
                background: #1E293B;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                display: flex;
                flex-direction: column;
                border: 1px solid rgba(255, 255, 255, 0.1);
                overflow: hidden;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
                transform-origin: bottom right;
                z-index: 10001;
            }
            
            .chatbot-window.active {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transform: translateY(0);
            }
            
            .chatbot-header {
                background: linear-gradient(135deg, #8B5CF6, #EC4899);
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: white;
            }
            
            .chatbot-header-info {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .chatbot-avatar {
                font-size: 2rem;
            }
            
            .chatbot-name {
                font-weight: 700;
                font-size: 1rem;
            }
            
            .chatbot-status {
                font-size: 0.75rem;
                opacity: 0.9;
            }
            
            .chatbot-minimize {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            }
            
            .chatbot-minimize:hover {
                background: rgba(255, 255, 255, 0.3);
            }
            
            .chatbot-messages {
                flex: 1;
                overflow-y: auto;
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                background: #0F172A;
            }
            
            .chatbot-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            .chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
            }
            
            .chatbot-messages::-webkit-scrollbar-thumb {
                background: #8B5CF6;
                border-radius: 3px;
            }
            
            .chatbot-message {
                display: flex;
                gap: 10px;
                animation: fadeIn 0.3s;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .bot-message {
                align-items: flex-start;
            }
            
            .user-message {
                flex-direction: row-reverse;
                align-items: flex-start;
            }
            
            .chatbot-avatar-small {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: linear-gradient(135deg, #8B5CF6, #EC4899);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                flex-shrink: 0;
            }
            
            .user-message .chatbot-avatar-small {
                background: linear-gradient(135deg, #F59E0B, #EC4899);
            }
            
            .message-content {
                background: rgba(255, 255, 255, 0.05);
                padding: 0.75rem 1rem;
                border-radius: 12px;
                color: #F8FAFC;
                font-size: 0.9rem;
                line-height: 1.5;
                max-width: 80%;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .user-message .message-content {
                background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
                border-color: rgba(139, 92, 246, 0.3);
            }
            
            .chatbot-input-area {
                padding: 1rem;
                background: #1E293B;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .quick-actions {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 0.75rem;
                flex-wrap: wrap;
            }
            
            .quick-btn {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: #F8FAFC;
                padding: 0.5rem 0.75rem;
                border-radius: 20px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.3s;
                font-family: 'Poppins', sans-serif;
            }
            
            .quick-btn:hover {
                background: rgba(139, 92, 246, 0.2);
                border-color: #8B5CF6;
                transform: translateY(-2px);
            }
            
            .input-wrapper {
                display: flex;
                gap: 0.5rem;
            }
            
            #chatbotInput {
                flex: 1;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 25px;
                padding: 0.75rem 1rem;
                color: white;
                font-size: 0.9rem;
                outline: none;
                font-family: 'Poppins', sans-serif;
            }
            
            #chatbotInput:focus {
                border-color: #8B5CF6;
                background: rgba(255, 255, 255, 0.08);
            }
            
            #chatbotInput::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }
            
            .chatbot-send {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background: linear-gradient(135deg, #8B5CF6, #EC4899);
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            }
            
            .chatbot-send:hover {
                transform: scale(1.1);
                box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
            }
            
            .chatbot-send:active {
                transform: scale(0.95);
            }
            
            @media (max-width: 768px) {
                .chatbot-window {
                    width: calc(100vw - 40px);
                    height: calc(100vh - 120px);
                    bottom: 90px;
                    right: 20px;
                }
            }
            
            @media (max-width: 480px) {
                .chatbot-window {
                    position: fixed;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 90vh;
                    max-height: 90vh;
                    border-radius: 20px 20px 0 0;
                    transform: translateY(100%);
                }
                
                .chatbot-window.active {
                    transform: translateY(0);
                }
                
                .chatbot-container {
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 10000;
                    width: 100%;
                    height: 0; /* Container shouldn't block clicks when closed */
                    overflow: visible;
                }
                
                .chatbot-toggle {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 10002;
                }
            }`;
        document.head.appendChild(style);
    }
    
    // Initialize chatbot
    function initChatbot() {
        createChatbot();
        
        const toggle = document.getElementById('chatbotToggle');
        const window = document.getElementById('chatbotWindow');
        const minimize = document.getElementById('chatbotMinimize');
        const sendBtn = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');
        const messages = document.getElementById('chatbotMessages');
        const quickBtns = document.querySelectorAll('.quick-btn');
        
        let isOpen = false;
        
        // Toggle chatbot
        toggle.addEventListener('click', function() {
            isOpen = !isOpen;
            if (isOpen) {
                window.classList.add('active');
                toggle.querySelector('.chatbot-badge').style.display = 'none';
                input.focus();
            } else {
                window.classList.remove('active');
            }
        });
        
        // Minimize chatbot
        minimize.addEventListener('click', function(e) {
            e.stopPropagation();
            isOpen = false;
            window.classList.remove('active');
        });
        
        // Send message
        function sendMessage(text, isUser = true) {
            if (!text.trim()) return;
            
            const messageDiv = document.createElement('div');
            messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
            messageDiv.innerHTML = `
                <span class="chatbot-avatar-small">${isUser ? '👤' : '🤖'}</span>
                <div class="message-content">${text}</div>
            `;
            messages.appendChild(messageDiv);
            messages.scrollTop = messages.scrollHeight;
            
            if (isUser) {
                input.value = '';
                setTimeout(() => {
                    const response = getBotResponse(text);
                    sendMessage(response, false);
                }, 800);
            }
        }
        
        // Get bot response
        function getBotResponse(userText) {
            const text = userText.toLowerCase();
            
            // Greetings
            if (text.match(/olá|oi|hello|hi|bom dia|boa tarde|boa noite/)) {
                return chatbotMessages.greetings[Math.floor(Math.random() * chatbotMessages.greetings.length)];
            }
            
            // Help
            if (text.match(/ajuda|help|como|o que|quê/)) {
                return chatbotMessages.help[Math.floor(Math.random() * chatbotMessages.help.length)];
            }
            
            // Games
            if (text.match(/jogo|game|slot|jogar|onde encontrar/)) {
                return chatbotMessages.games[Math.floor(Math.random() * chatbotMessages.games.length)];
            }
            
            // Bonuses
            if (text.match(/bónus|bonus|oferta|promo|grátis|free/)) {
                return chatbotMessages.bonuses[Math.floor(Math.random() * chatbotMessages.bonuses.length)];
            }
            
            // Tournaments
            if (text.match(/torneio|competição|prémio|premio|competir/)) {
                return chatbotMessages.tournaments[Math.floor(Math.random() * chatbotMessages.tournaments.length)];
            }
            
            // Platforms
            if (text.match(/plataforma|casino|site|recomenda|melhor/)) {
                return chatbotMessages.platforms[Math.floor(Math.random() * chatbotMessages.platforms.length)];
            }
            
            // Encouragement
            if (text.match(/obrigado|thanks|obrigada|valeu|fixe|legal/)) {
                return chatbotMessages.encouragement[Math.floor(Math.random() * chatbotMessages.encouragement.length)];
            }
            
            // Default
            return chatbotMessages.default[Math.floor(Math.random() * chatbotMessages.default.length)];
        }
        
        // Send button click
        sendBtn.addEventListener('click', function() {
            sendMessage(input.value, true);
        });
        
        // Enter key
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage(input.value, true);
            }
        });
        
        // Quick action buttons
        quickBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                const actionTexts = {
                    games: 'Quais jogos tens disponíveis?',
                    bonuses: 'Quais são os bónus disponíveis?',
                    tournaments: 'Quais torneios estão ativos?'
                };
                sendMessage(actionTexts[action], true);
            });
        });
        
        // Auto welcome message after 2 seconds
        setTimeout(() => {
            if (!isOpen) {
                toggle.querySelector('.chatbot-badge').style.display = 'flex';
            }
        }, 2000);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();


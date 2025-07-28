// 猜数字游戏逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 游戏变量
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let hasWon = false;
    
    // DOM元素
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptCount = document.getElementById('attemptCount');
    const hint = document.getElementById('hint');
    const restartButton = document.getElementById('restartButton');
    
    // 猜数字函数
    function checkGuess() {
        if (hasWon) return;
        
        const userGuess = parseInt(guessInput.value);
        
        // 验证输入
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = '请输入1到100之间的有效数字！';
            message.style.color = '#f56565';
            return;
        }
        
        // 增加尝试次数
        attempts++;
        attemptCount.textContent = attempts;
        
        // 检查猜测
        if (userGuess === randomNumber) {
            message.textContent = `恭喜你！答案就是 ${randomNumber}！`;
            message.style.color = '#48bb78';
            hint.textContent = `你用了 ${attempts} 次就猜对了！`;
            hasWon = true;
            restartButton.style.display = 'inline-block';
        } else if (userGuess < randomNumber) {
            message.textContent = '太小了！再试一次。';
            message.style.color = '#333';
            hint.textContent = '提示：试试更大的数字';
        } else {
            message.textContent = '太大了！再试一次。';
            message.style.color = '#333';
            hint.textContent = '提示：试试更小的数字';
        }
        
        // 清空输入框
        guessInput.value = '';
        guessInput.focus();
    }
    
    // 重新开始游戏
    function restartGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        hasWon = false;
        
        attemptCount.textContent = attempts;
        message.textContent = '请输入你的猜测';
        message.style.color = '#333';
        hint.textContent = '';
        restartButton.style.display = 'none';
        guessInput.focus();
    }
    
    // 事件监听器
    guessButton.addEventListener('click', checkGuess);
    
    guessInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });
    
    restartButton.addEventListener('click', restartGame);
    
    // 初始化焦点
    guessInput.focus();
});
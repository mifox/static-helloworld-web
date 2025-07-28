// 当页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加一个简单的点击事件
    const container = document.querySelector('.container');
    
    container.addEventListener('click', function() {
        // 创建一个动态元素
        const message = document.createElement('p');
        message.textContent = '页面交互功能正常！';
        message.style.color = '#667eea';
        message.style.fontWeight = 'bold';
        message.style.marginTop = '1rem';
        
        // 将新元素添加到容器中
        container.appendChild(message);
        
        // 移除事件监听器，防止重复添加
        container.removeEventListener('click', arguments.callee);
    });
    
    // 添加一个定时器，每5秒改变一次标题颜色
    let colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'];
    let colorIndex = 0;
    
    setInterval(function() {
        const heading = document.querySelector('h1');
        heading.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});
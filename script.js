// script.js
// 四川话词典（可按需扩展）
const vocabulary = {
    "什么": "啥子",
    "吃饭": "吃莽莽",
    "哪里": "哪儿",
    "不知道": "晓不得",
    "很好": "巴适得很",
    "怎么办": "咋个办",
    "聊天": "摆龙门阵",
    "便宜": "相因",
    "散步": "转路",
    "女朋友": "堂客"
};

// 元素引用
const input = document.getElementById('input');
const output = document.getElementById('output');
const translateBtn = document.getElementById('translateButton');
const clearBtn = document.getElementById('clearButton');

// 翻译功能
function translateText(text) {
    // 按关键词长度排序，优先替换长词汇
    const sortedWords = Object.keys(vocabulary).sort((a, b) => b.length - a.length);
    
    sortedWords.forEach(word => {
        const regex = new RegExp(word, 'g');
        text = text.replace(regex, vocabulary[word]);
    });
    return text;
}

// 事件处理
translateBtn.addEventListener('click', () => {
    if (!input.value.trim()) {
        output.textContent = "请先输入要翻译的内容！";
        return;
    }
    
    output.textContent = translateText(input.value);
});

clearBtn.addEventListener('click', () => {
    input.value = '';
    output.textContent = '';
    input.focus();
});

// 回车快捷翻译
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        translateBtn.click();
    }
});
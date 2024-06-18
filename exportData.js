const STORAGE_KEY = 'allCheckoutData';
//         // 导出数据为JSON文件的函数
//         window.exportData = function() {
//             // 获取localStorage中存储的所有数据
//             const allData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
//             // 创建一个新的Blob对象，包含所有数据
//             const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
//             // 使用FileSaver.js保存文件
//             saveAs(blob, 'allCheckoutData.json');
//             }
window.exportData = function() {
    // 从localStorage获取所有结账数据
    var allCheckoutData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    // 创建一个新的Blob对象，包含所有数据
    const blob = new Blob([JSON.stringify(allCheckoutData, null, 2)], { type: 'application/json' });
    // 使用FileSaver.js保存文件
    saveAs(blob, 'allRoomsCheckoutData.json');
}
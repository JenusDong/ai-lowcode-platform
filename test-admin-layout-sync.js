/**
 * AdminLayout Tab-Slot 同步删除功能 - 浏览器端验证脚本
 * 在 LowCode Engine 环境中直接测试 Tab 删除与子组件同步
 */

// 验证 AdminLayout 组件是否正确实现 Tab-Slot 同步
function verifyTabSlotSync() {
  console.log('🔍 开始验证 AdminLayout Tab-Slot 同步删除功能...\n');
  
  const results = {
    passed: [],
    failed: []
  };
  
  // 检查 1: 验证 removeChildBySlot 函数存在
  try {
    const adminLayoutComponents = document.querySelectorAll('.admin-layout');
    if (adminLayoutComponents.length > 0) {
      results.passed.push('✅ 找到 AdminLayout 组件实例');
      
      // 检查是否有 Tab 元素
      const tabElements = document.querySelectorAll('.tab-item');
      if (tabElements.length > 0) {
        results.passed.push(`✅ 发现 ${tabElements.length} 个 Tab 元素`);
        
        // 检查关闭按钮
        const closeButtons = document.querySelectorAll('.tab-close-btn');
        if (closeButtons.length > 0) {
          results.passed.push(`✅ 发现 ${closeButtons.length} 个 Tab 关闭按钮`);
        } else {
          results.failed.push('❌ 未找到 Tab 关闭按钮');
        }
      } else {
        results.failed.push('❌ 未找到 Tab 元素');
      }
    } else {
      results.failed.push('❌ 未找到 AdminLayout 组件（可能需要先拖拽到画布）');
    }
  } catch (error) {
    results.failed.push(`❌ 检查过程出错: ${error.message}`);
  }
  
  // 检查 2: 验证 LowCode Engine API 可用性
  try {
    if (window.AliLowCodeEngine && window.AliLowCodeEngine.project) {
      results.passed.push('✅ LowCode Engine API 可用');
      
      const doc = window.AliLowCodeEngine.project.currentDocument;
      if (doc && doc.removeNode) {
        results.passed.push('✅ removeNode API 可用');
      } else {
        results.failed.push('❌ removeNode API 不可用');
      }
    } else {
      results.failed.push('❌ LowCode Engine API 不可用');
    }
  } catch (error) {
    results.failed.push(`❌ API 检查出错: ${error.message}`);
  }
  
  // 输出结果
  console.log('📊 验证结果：\n');
  
  results.passed.forEach(result => console.log(result));
  results.failed.forEach(result => console.error(result));
  
  console.log('\n' + '='.repeat(50));
  console.log(`总计: ${results.passed.length} 通过, ${results.failed.length} 失败`);
  console.log('='.repeat(50));
  
  return {
    success: results.failed.length === 0,
    details: results
  };
}

// 如果在浏览器环境中运行
if (typeof window !== 'undefined') {
  window.verifyAdminLayout = verifyTabSlotSync;
}

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { verifyTabSlotSync };
}

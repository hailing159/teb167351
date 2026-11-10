window.globalCssHtmlRefs=[['聊天列表',`<div id="chat-list-screen" class="screen"><div class="header" id="chat-list-header"><span class="back-btn">‹</span><span class="chat-header-title">消息</span><div class="header-actions"><span class="action-btn" id="chat-list-menu-btn"><i class="fa-solid fa-plus"></i></span><div id="chat-list-dropdown-menu"><div class="dropdown-menu-item" id="dropdown-import-character"><i class="fa-solid fa-heart"></i><span>上传角色</span></div><div class="dropdown-menu-item" id="dropdown-add-group"><i class="fa-solid fa-users"></i><span>创建群聊</span></div><div class="dropdown-menu-item" id="dropdown-add-chat"><i class="fa-solid fa-user-plus"></i><span>创建角色</span></div></div></div><div class="batch-controls"><span class="back-btn" id="chat-batch-cancel-btn">取消</span><span id="chat-batch-count">已选择 0 项</span><div><span id="chat-batch-move-btn">移动</span><span id="chat-batch-delete-btn">删除</span><span id="chat-select-all-btn">全选</span><span id="chat-batch-download-btn">下载</span><span id="chat-batch-upload-btn">上传</span></div></div></div><div id="chat-group-bar"><div id="chat-group-scroll"><div class="chat-group-tag active" data-group-id="all">全部</div><div class="chat-group-tag" data-group-id="add">+ 新建分组</div></div></div><div id="chat-list"><div class="chat-list-item" data-chat-id="聊天ID"><img src="头像" class="avatar"><div class="info"><div class="name-line"><span class="name">名称</span><span class="group-tag">群聊</span></div><div class="last-msg">最后一条消息</div></div></div></div><div id="chat-list-tabbar"><div class="tabbar-item active" data-tab="all"><div><i class="fa-solid fa-message"></i><span id="messages-tab-badge"></span></div><span>消息</span></div><div class="tabbar-item" data-tab="contacts"><div><i class="fa-solid fa-address-book"></i><span id="contacts-tab-badge"></span></div><span>联系人</span></div><div class="tabbar-item" data-tab="moments"><div><i class="fa-solid fa-circle-notch"></i><span id="moments-tab-badge"></span></div><span>动态</span></div></div></div>`],
['聊天界面 - 顶部栏和输入区',`<div id="chat-interface-screen" class="screen"><button id="scroll-to-bottom-btn"><i class="fa-solid fa-arrow-down"></i></button><div class="header"><div class="default-controls"><span class="back-btn" id="back-to-list-btn">‹</span><span id="chat-header-title">聊天对象</span><div class="header-actions"><span class="action-btn" id="listen-together-btn"><img src="图标" alt="一起听"></span><span class="action-btn" id="chat-settings-btn"><img src="图标" alt="设置"></span></div></div><div class="selection-controls"><span id="selection-cancel-btn">取消</span><span id="selection-count"></span><div><span id="selection-screenshot-btn">截图</span><span id="selection-forward-btn">转发</span><span id="selection-delete-btn">删除</span></div></div></div><div class="select-to-here-fixed" id="select-to-here-fixed"><div class="select-to-here-line"></div><button class="select-to-here-btn" id="select-to-here-btn">选择到这里</button></div><div id="chat-messages"></div><div id="quote-preview-area"><div id="quote-preview-content"><div id="quote-preview-author"></div><div id="quote-preview-text"></div></div><button id="remove-quote-btn">×</button></div><div id="chat-input-area"><div id="quick-reply-bar"><div id="quick-reply-list"></div></div><div id="chat-input-main-row"><textarea id="chat-input" rows="1"></textarea><div id="input-actions-wrapper"><button id="wait-reply-btn"><img src="图标" alt="等待回复"></button><button id="send-btn" class="action-button">发送</button></div></div><div id="chat-input-actions-top"><button id="voice-message-btn" class="chat-action-icon-btn action-button"><i class="fa-solid fa-microphone"></i></button><button id="upload-image-btn" class="chat-action-icon-btn action-button"><i class="fa-solid fa-image"></i></button><button id="send-photo-btn" class="chat-action-icon-btn action-button"><i class="fa-solid fa-camera"></i></button><button id="transfer-btn" class="chat-action-icon-btn action-button"><i class="fa-solid fa-yen-sign"></i></button><button id="open-sticker-panel-btn" class="chat-action-icon-btn action-button"><i class="fa-solid fa-face-smile"></i></button><button id="other-actions-btn" class="chat-action-icon-btn action-button"><i class="fa-solid fa-plus"></i></button></div><div id="other-actions-panel"><div id="other-actions-grid"><div class="other-action-item" id="voice-call-btn"><div class="other-action-icon"><i class="fa-solid fa-phone-volume"></i></div><div class="other-action-label">语音通话</div></div><div class="other-action-item" id="video-call-btn"><div class="other-action-icon"><i class="fa-solid fa-video"></i></div><div class="other-action-label">视频通话</div></div><div class="other-action-item" id="gift-btn"><div class="other-action-icon"><i class="fa-solid fa-gift"></i></div><div class="other-action-label">礼物</div></div><div class="other-action-item" id="location-btn"><div class="other-action-icon"><i class="fa-solid fa-location-dot"></i></div><div class="other-action-label">位置</div></div><div class="other-action-item" id="qq-space-btn"><div class="other-action-icon"><i class="fa-solid fa-star"></i></div><div class="other-action-label">QQ空间</div></div><div class="other-action-item" id="pat-btn"><div class="other-action-icon"><i class="fa-solid fa-hand-sparkles"></i></div><div class="other-action-label">拍一拍</div></div><div class="other-action-item" id="diary-btn"><div class="other-action-icon"><i class="fa-solid fa-book-open"></i><span class="diary-badge"></span></div><div class="other-action-label">日记</div></div><div class="other-action-item" id="search-record-btn"><div class="other-action-icon"><i class="fa-solid fa-globe"></i></div><div class="other-action-label">搜索记录</div></div></div><div id="other-actions-grid-page2"><div class="other-action-item" id="ai-quiz-btn"><div class="other-action-icon"><i class="fa-solid fa-clipboard-question"></i></div><div class="other-action-label">ai答卷</div></div><div class="other-action-item" id="theater-btn"><div class="other-action-icon"><i class="fa-solid fa-masks-theater"></i><span class="theatre-badge"></span></div><div class="other-action-label">小剧场</div></div><div class="other-action-item" id="status-bar-btn"><div class="other-action-icon"><i class="fa-solid fa-spinner"></i></div><div class="other-action-label">屏幕共享</div></div><div class="other-action-item" id="live-room-btn"><div class="other-action-icon"><i class="fa-regular fa-circle-dot"></i></div><div class="other-action-label">直播间</div></div><div class="other-action-item" id="novel-mode-btn"><div class="other-action-icon"><i class="fa-solid fa-pen-nib"></i></div><div class="other-action-label">小说模式</div></div><div class="other-action-item" id="reader-btn"><div class="other-action-icon"><i class="fa-solid fa-book-open-reader"></i></div><div class="other-action-label">阅读器</div></div><div class="other-action-item" id="chat-viewer-btn"><div class="other-action-icon"><i class="fa-solid fa-mug-hot"></i></div><div class="other-action-label">记录查看</div></div><div class="other-action-item solo-only" id="monitor-btn"><div class="other-action-icon"><i class="fa-solid fa-arrows-to-eye"></i></div><div class="other-action-label">监控</div></div><div class="other-action-item group-only" id="group-vote-btn"><div class="other-action-icon"><i class="fa-solid fa-check-to-slot"></i></div><div class="other-action-label">群投票</div></div><div class="other-action-item group-only" id="private-chat-btn"><div class="other-action-icon"><i class="fa-solid fa-message"></i></div><div class="other-action-label">私聊模式</div></div><div class="other-action-item" id="cinema-btn"><div class="other-action-icon"><i class="fa-solid fa-film"></i></div><div class="other-action-label">观影</div></div></div><div id="other-actions-grid-page3"></div><div id="other-actions-pagination"><span class="page-dot active" data-page="1">●</span><span class="page-dot" data-page="2">○</span><span class="page-dot solo-only-dot" data-page="3">○</span></div></div></div></div><div id="message-actions-modal" class="modal"><div id="message-actions-container"><div id="message-actions-scroll-wrapper"><div id="message-actions-pages"><div class="custom-modal-footer"><button id="copy-message-btn"><i class="fa-solid fa-copy"></i>复制</button><button id="favorite-message-btn"><i class="fa-solid fa-star"></i>收藏</button><button id="delete-single-message-btn"><i class="fa-solid fa-trash"></i>删除</button><button id="edit-message-btn"><i class="fa-solid fa-pager"></i>编辑</button><button id="select-message-btn"><i class="fa-solid fa-check-square"></i>多选</button><button id="quote-message-btn"><i class="fa-solid fa-quote-left"></i>引用</button><button id="translate-message-btn"><i class="fa-solid fa-language"></i>翻译</button><button id="hide-message-btn"><i class="fa-solid fa-eye-slash"></i>隐藏</button><button id="retry-message-btn"><i class="fa-solid fa-rotate-right"></i>重刷</button><button id="archive-from-here-btn"><i class="fa-solid fa-box-archive"></i>归档</button></div><div class="custom-modal-footer"><button id="regenerate-image-btn"><i class="fa-solid fa-image"></i>生图</button><button id="view-image-btn"><i class="fa-regular fa-eye"></i>查看</button><button id="name-replace-btn"><i class="fa-solid fa-right-left"></i>替换</button><button id="ai-reply-assist-btn"><i class="fa-solid fa-wand-magic-sparkles"></i>帮答</button></div></div></div></div></div>`],
['聊天界面 - 气泡和卡片',`<div id="chat-messages"><div class="message-wrapper ai"><div class="sender-name"><span class="group-title-tag gold">群主</span>发送者</div><div class="bubble-and-time-container"><div class="message-bubble ai"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content">消息内容<div class="translation-area"><div class="translation-content"></div></div></div></div><span class="timestamp">14:30</span></div><div class="emoji-reactions-bar-wrap"><div class="emoji-reactions-bar"><span class="emoji-reaction-tag reacted-by-me"><span class="reaction-emoji"></span><span class="reaction-count">1</span></span><span class="emoji-reaction-add-btn">+</span></div></div></div><div class="message-wrapper user"><div class="bubble-and-time-container"><div class="message-bubble user"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content">消息内容</div></div><span class="timestamp">14:31</span></div></div><div class="system-message-wrapper"><div class="system-time">系统消息</div></div><div class="system-message-wrapper thinking-chain-row"><div class="system-time">14:30</div><div><div class="thinking-chain-wrap"><div class="thinking-chain-header"><i class="fa-solid fa-brain"></i><span>思考过程</span></div><div>思考内容</div></div></div></div><div class="message-bubble ai is-voice-message"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content"><div class="voice-message-body"><i class="fa-solid fa-circle-play voice-play-btn"></i><div class="voice-waveform"><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div></div><span class="voice-duration">0:03"</span></div><div class="voice-content-expanded"><div class="voice-text-content">语音文字</div></div></div></div><div class="message-bubble ai is-ai-image"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content"><img src="图片地址" class="ai-generated-image" alt="AI生成的图片"></div></div><div class="message-bubble ai is-transfer"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content"><div class="transfer-card" data-status="pending"><div class="transfer-title"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg> 收到一笔转账</div><div class="transfer-amount">¥ 520.00</div><div class="transfer-note">备注</div></div></div></div><div class="message-bubble ai is-gift"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content"><div class="gift-card"><div class="gift-main"><div class="gift-icon-title"><i class="fa-solid fa-gifts"></i><span class="gift-title-text">送出一份礼物</span></div><div class="gift-claim-btn">立即拆开</div><div class="gift-value-tag">价值1元</div></div><div class="gift-source">送礼人</div></div></div></div><div class="message-bubble ai is-location"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content"><div class="location-card"><div class="location-map-preview"><div class="location-map-canvas"></div><div class="location-marker"><i class="fa-solid fa-location-dot"></i></div></div><div class="location-info-section"><div class="location-name-text"><i class="fa-solid fa-location-dot"></i>地点名称</div><div class="location-time-text"><i class="fa-regular fa-clock"></i>时间</div></div></div></div></div><div class="message-bubble ai is-recipe"><div class="avatar-group"><img src="头像" class="avatar"></div><div class="content"><div class="recipe-card"><div class="recipe-header"><div class="recipe-icon">图标</div><div class="recipe-title"><span class="recipe-name">菜名</span><span class="recipe-meal-type">推荐</span></div></div><div class="recipe-preview"><div class="recipe-ingredients-preview"><span class="ingredient-tag">食材</span></div></div><div class="recipe-actions"><button class="recipe-view-btn">查看菜谱</button></div></div></div></div><div class="quoted-message"><div class="quote-header"><span class="quote-author">发送者</span><span class="quote-time">12:30</span></div><div class="quote-content">被引用的内容</div><div class="quote-jump">↑</div></div><div id="typing-indicator"><span class="typing-indicator-icon"></span><span class="typing-indicator-text">对方正在输入...</span><span class="typing-indicator-dots"></span></div></div>`],
['聊天设置',`<div id="chat-settings-screen" class="screen"><div class="header"><span class="back-btn" id="back-to-chat-btn">‹</span><span>聊天设置</span><span class="save-btn" id="save-chat-settings-btn">保存</span></div><div class="form-container"><div class="form-group" id="api-config-group"><label for="chat-api-config-select">API配置</label><select id="chat-api-config-select"></select></div><div class="form-group" id="vision-api-config-group"><label for="chat-vision-api-config-select">识图API配置</label><select id="chat-vision-api-config-select"></select></div><div class="form-group"><label>回复温度 <span id="chat-temperature-value">0.8</span></label><input type="range" id="chat-temperature" min="0.1" max="2.0" step="0.01"></div><div class="form-group"><label>最大回复长度</label><input type="number" id="global-max-tokens-input"></div><div class="form-group"><label>记忆总结</label><input type="range" id="summary-token-limit-slider" min="1" max="100"></div><div class="form-group"><label for="stream-output-switch">流式输出</label><button type="button" id="stream-output-switch">自动</button></div><div class="form-group"><label for="sync-real-time-switch">同步现实时间</label><input type="checkbox" id="sync-real-time-switch"></div><div class="form-group"><label for="real-typing-switch">启用真实打字显示</label><input type="checkbox" id="real-typing-switch"></div><div class="form-group"><label for="quick-reply-switch">快捷回复</label><input type="checkbox" id="quick-reply-switch"></div><div class="form-group"><label for="enter-to-send-switch">回车发送消息</label><input type="checkbox" id="enter-to-send-switch"></div><div class="form-group" id="chat-name-group"><label for="chat-name-input">对方名字</label><input type="text" id="chat-name-input"></div><div class="form-group" id="ai-persona-group"><label for="ai-persona">对方人设</label><textarea id="ai-persona" rows="3"></textarea></div><div class="form-group" id="ai-avatar-group"><label>对方头像</label><div class="avatar-upload"><img id="ai-avatar-preview"><div class="avatar-button-rows"><button class="change-frame-btn" data-type="ai">更换头像框</button></div></div></div><div class="form-group" id="my-nickname-group"><label for="my-nickname-input">我的名字</label><input type="text" id="my-nickname-input"></div><div class="form-group" id="my-persona-group"><label for="my-persona">我的人设</label><textarea id="my-persona" rows="3"></textarea></div><div class="form-group"><label for="max-memory">上下文记忆条数</label><input type="number" id="max-memory"></div><div class="form-group"><label>聊天显示条数</label><input type="range" id="visible-message-limit-slider" min="0" max="100"><span id="visible-message-limit-value">20</span></div><div class="form-group"><label>全局字体大小 <span id="font-size-value">13px</span></label><input type="range" id="font-size-slider" min="10" max="50" step="1"></div><div class="form-group"><label>聊天气泡主题</label><select id="theme-select-dropdown"><option value="default">默认</option></select><div id="theme-preview-box"></div><textarea id="custom-css-input" rows="5"></textarea></div><div class="form-group"><label>聊天背景</label><div class="bg-upload-container"><button type="button" id="remove-bg-btn">移除背景</button></div><img id="bg-preview" class="bg-preview-img"><input type="file" id="bg-input"></div><div class="form-group"><label for="auto-translate-switch">自动翻译新消息</label><input type="checkbox" id="auto-translate-switch"><select id="auto-translate-target-lang"></select></div><div class="form-group"><label for="auto-reply-switch">开启自动回复</label><input type="checkbox" id="auto-reply-switch"><select id="auto-reply-unit-select"></select></div><button class="form-button form-button-secondary" id="clear-chat-btn">清空聊天记录</button></div></div>`],
['多选界面美化（白色磨砂）',`/* ===== 多选界面美化（白色磨砂） ===== */
/* 隐藏的那个元素透明化 */
.page-dot {
    display: inline !important;
    color: transparent !important;
    opacity: 0 !important;
}

/* 其他界面透明 */
#other-actions-panel{
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  color: transparent !important;
  font-size: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
}

/* ===== 多选操作栏整体·磨砂版·黑色 ===== */
/* 隐藏默认控制 */
#chat-interface-screen.selection-mode .default-controls {
    display: none !important;
}

/* 整个多选操作栏：半透明、圆角、阴影、浮起感 */
#chat-interface-screen.selection-mode .selection-controls {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    position: absolute !important;
    top: 28px !important;
    left: 12px !important;
    right: 12px !important;
    height: 54px !important;
    width:320px;
    padding: 0 12px !important;
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(10px) !important;
    border-radius: 14px !important;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
    transform: scale(0.9) !important;
    transform-origin: center top !important;
    transition: all 0.25s ease-in-out !important;
    z-index: 1000 !important;
}

/* 按钮图标统一大小 + 过渡效果 */
#chat-interface-screen.selection-mode .action-btn svg {
    display: block !important;
    width: 22px !important;
    height: 22px !important;
    stroke: #ffffff !important;
    transition: transform 0.2s, stroke 0.2s !important;
}
#chat-interface-screen.selection-mode .action-btn:hover svg {
    transform: scale(1.2) !important;
}

/* 左侧取消按钮 */
#chat-interface-screen.selection-mode #selection-cancel-btn {
    color: #000 !important;
    font-size: 14px !important;
}

/* 中间已选择计数 */
#chat-interface-screen.selection-mode #selection-count {
    color: #000 !important;
    font-size: 15px !important;
}

/* 右侧操作按钮组 */
#chat-interface-screen.selection-mode .header-actions {
    display: flex !important;
    gap: 18px !important;
    margin: 0 !important;
    position: static !important;
}

/* 删除 / 擦除按钮强调红色 + hover亮色 */
#chat-interface-screen.selection-mode #selection-soft-delete-btn svg,
#chat-interface-screen.selection-mode #selection-erase-btn svg {
    stroke: #ff4b3b !important;
}

#chat-interface-screen.selection-mode #selection-soft-delete-btn:hover svg,
#chat-interface-screen.selection-mode #selection-erase-btn:hover svg {
    stroke: #ff6b5b !important;
}

/* 截图按钮绿色亮色 + hover效果 */
#chat-interface-screen.selection-mode #selection-screenshot-btn {
    color: #4cd964 !important;
    font-size: 14px !important;
}
#chat-interface-screen.selection-mode #selection-screenshot-btn:hover {
    color: #76e08b !important;
}

/* 隐藏按钮黑色 + hover效果 */
#chat-interface-screen.selection-mode #selection-hide-btn {
    color: #000 !important;
    font-size: 14px !important;
}
#chat-interface-screen.selection-mode #selection-hide-btn:hover {
    color: #555 !important;
}

/* 转发 / 删除按钮字号统一 */
#chat-interface-screen.selection-mode #selection-forward-btn,
#chat-interface-screen.selection-mode #selection-delete-btn {
    font-size: 14px !important;
}

/* ===== 选中消息气泡 ✔-白(35px) ===== */
.message-bubble.selected::after {
    content: "✔";
    position: absolute;
    top: 6px;
    right: 6px;
    background: #fff;
    color: #000;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    border-radius: 50%;
    z-index: 10;
}

/* ===== 选择到这里：整体容器-白色 ===== */
.select-to-here-fixed {
    z-index: 999 !important;
}

/* ===== 选择到这里按钮 ===== */
#select-to-here-btn {
    position: absolute !important;
    top: 20px;
    background: #fff;
    color: #000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
    border: none;
    border-radius: 6px;
}
.select-to-here-line{
     border-top: 2px dashed #000;transform: translateY(35px);
}

/* ===== 白色·滚动到底部按钮样式 ===== */
#scroll-to-bottom-btn {
  position: absolute !important;
  right: 16px !important;
  bottom: 200px !important;
  width: 30px !important;
  height: 30px !important;
  background: #fff !important;
  border: 1px solid #fff !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #000 !important;
  z-index: 1000 !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
  font-size: 10px !important;
}`],
['底部栏菜单美化',`/* --- 底栏菜单--- */
#chat-input-actions-top {
    position: absolute !important;
    left: 10% !important;
    bottom: 15px !important;
    top: auto !important;
    -webkit-transform: translateX(-50%) !important;
    -ms-transform: translateX(-50%) !important;
    transform: translateX(-50%) !important;
    width: 50px !important;
    height: 50px !important;
    background: none !important;
    border: none !important;
    opacity: 1 !important;
    font-size: 0 !important;
    color: transparent !important;
    overflow: hidden !important;
    z-index: 20 !important;
    -webkit-tap-highlight-color: transparent !important;
    -webkit-appearance: none !important;
    outline: none !important;
}

/* 平时强制隐藏内部按钮 */
#chat-input-actions-top > * {
    display: none !important;
}

/* 1. 图标 */
#chat-input-actions-top::after {
    content: "";
    display: block;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    opacity: 0.9;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    white-space: nowrap;
    display: inline-block !important;  /* 防止缩成点 */    
   width: 30px !important;
    height: 30px !important;
    background-image: url('') !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    font-weight: normal !important; 
    z-index: 1000 !important;
     pointer-events: none; /* 避免影响点击 */
}

/* --- 2. 展开状态  --- */
#chat-input-actions-top:focus-within {
    position: fixed !important;
    bottom: 50px !important;
    top: auto !important;
    left: 10% !important;
    -webkit-transform: translateX(-50%) !important;
    -ms-transform: translateX(-50%) !important;
    transform: translateX(-50%) !important;
    width: 64px !important;
    min-height: auto !important;
    height: auto !important;
    background-color: rgba(250, 250, 250, 0.98) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    border-radius: 12px !important;
    -webkit-box-shadow: 0 10px 100vw rgba(0,0,0,0.6) !important;
    box-shadow: 0 10px 100vw rgba(0,0,0,0.6) !important;
    display: grid !important;
    grid-template-columns: 1fr !important;
    row-gap: 12px !important;
    padding: 12px 8px !important;
    z-index: 99999 !important;
    overflow: visible !important;
}

/* 展开时显示内部按钮（保持你原来的触发方式） */
#chat-input-actions-top:active > *, 
#chat-input-actions-top:hover > * {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 48px !important;
    height: 48px !important;
    background-color: rgba(255,255,255,0.1) !important;
    border-radius: 12px !important;
    margin: 0 !important;
    aspect-ratio: 1 / 1 !important;
    white-space: nowrap !important;
}

/* 展开后隐藏top伪元素 */
#chat-input-actions-top:active::after,
#chat-input-actions-top:hover::after {
    display: none !important;
}

#chat-input-actions-top.menu-open,
#chat-input-actions-top:hover {
    position: fixed !important; /* 相对于屏幕，而不是父容器 */
    z-index: 100000 !important;  /* 保证比聊天内容高 */
}

#chat-input-area {
    overflow: visible !important; /* 防止菜单被裁剪 */
}

/* 4.防止长按 */
#chat-input-actions-top {
    -webkit-user-select: none !important;  /* 禁止长按选择 */
    user-select: none !important;
    touch-action: manipulation !important;  /* 避免长按触发浏览器默认行为 */
}`],
['控制聊天框 | 的位置',`/* 控制聊天框 | 的位置 */
html body #chat-input-area #chat-input {
    padding-left: 10px !important;   /* 左 */
    padding-top: 8px !important;     /* 上 */  
    padding-bottom: 0px !important;     /* 下*/    
    padding-right: 0px !important;   /* 右 */
}
`],
['顶部栏和底部栏美化css',`/* 顶部栏固定透明化 */
#chat-interface-screen .header {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999 !important;
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* 底部栏固定透明化 */
#chat-input-area {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999 !important;
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* 聊天区域占满全屏，用padding避免贴边 */
#chat-messages {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  padding: 60px 15px 80px 15px !important;/*上左下右*/
  margin: 0 !important;
  box-sizing: border-box !important;
}`]];
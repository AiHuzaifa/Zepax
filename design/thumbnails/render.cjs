const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const jobs = [['business-automations',800,500],['crm-setup-integrations',800,500],['ai-agent-development',800,500],['custom-mcp-setups',800,500],['hero-workflow',800,600],['og',1200,630]];
  for (const [n,w,h] of jobs) {
    const p = await b.newPage({ viewport:{width:w,height:h}, deviceScaleFactor: n==='og'?1:2 });
    await p.goto('file://'+__dirname+'/'+n+'.html'); await p.waitForTimeout(300);
    await p.screenshot({ path: __dirname+'/'+n+'.png' }); await p.close();
  }
  await b.close();
})();

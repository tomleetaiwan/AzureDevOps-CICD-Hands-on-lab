# Azure DevOps 持續整合/持續交付 (CI/CD,Continuous Integration Continuous Delivery) 功能實機操作

## 刪除 Azure Container Registry 與 Azure Web App for Conatiner - Linux 之資源群組

在命令列模式下達以下指令即會刪除之前所建立的 Azure Container Registry 與 Azure Web App for Conatiner - Linux，整個過程會花費數分鐘時間，而 Azure DevOps 免費帳號不會產生任何費用，您可以保留日後繼續使用。

```powershell
az group delete -n myDevOpsResourceGroup
```

* [返回 README](README.md)

KISSY.use("gallery/combobox-suggest/0.1/index", function (S,Sug,undefined) {
    S.ready(function(){
        var sug = new Sug({
            "mods":{
                "history":{
                    "modname": "gallery/combobox-suggest/0.1/plugins/history",
                    "tab":"item"
                }
            },
            "extra":{
                "history": window.TB&&window.TB.Global.isLogin(),
                "tipNotice":false,
                "tab":false,
                "tel": false,
                "cat": false,
                "global": false,
                "new": false,
                "shop": false,
                "jipiao": false,
                "tdg": false,
                "showExtra": false
            },
            "sugConfig":{
                extraParams: "",
                sourceUrl:"http://suggest.taobao.com/sug?area=ssrch",
                comboBoxCfg:{
                    srcNode: ".input-auto",
                    "resultFormat": ''
                }
            }
        });
        sug.on("beforeSubmit",function(e){
            var queryNode = S.one("#q");
            if(!queryNode) return;
            var query = queryNode.val();
            if(S.trim(query) === ""){
                return true;
            }
        })
    })
})

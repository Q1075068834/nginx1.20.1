
$.extend({
    getIp:"localhost",
    changeName:function (data){
        let newArr=[];
        $.each(data, function(i,val){
            if(val.portType===1){
                val.portType= 'Access'
            } if(val.portType===2){
                val.portType= 'Trunk'
            } if(val.portType===3){
                val.portType= 'Hybrid'
            }
            newArr.push(val)
        });
        return newArr
    },

    verificationNum: function(target,error,min,max) {
        let result=new RegExp("^[0-9]*$");
        if(!result.test($(target).val())){
            $(error)
                .css("color","red")
                .css("margin-top","18px")
                .html("只能输入数字!");
            $(target).addClass("errorShadow");
            return
        }else {
            $(error).empty();
            $(target).removeClass("errorShadow")
        }

        if( min < parseInt($(target).val()) && parseInt($(target).val()) < max ){
            $(error).empty();
            $(target).removeClass("errorShadow")
        } else if( min === null && max === null ) {
            $(error).empty();
            $(target).removeClass("errorShadow")
        }
        else {
            $(error)
                .css("color","red")
                .css("margin-top","18px")
                .html("484-17940!");
            $(target).addClass("errorShadow")
        }
    },

    transNo :function (dataList,queryParams){
        if (dataList.length == 0) {
            return dataList;
        }
        let startNum = parseInt((queryParams.currentPage - 1) * queryParams.pageSize) + 1
        dataList.map((item) => {
            item.sort = startNum;
            startNum++
        });
        return dataList;
    },

});
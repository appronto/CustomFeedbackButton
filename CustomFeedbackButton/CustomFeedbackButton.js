dojo.provide("CustomFeedbackButton.CustomFeedbackButton");
mendix.widget.declare("CustomFeedbackButton.CustomFeedbackButton", {
   
    inputargs: {
        clickmicroflow:"",
        buttontext:""
    },
    
    // references to DOM elements
    button:null,
    
    postCreate : function(){
       var imageUrl = "";
       if(this.buttontext == "Feedback")
           imageURL = "../widgets/CustomFeedbackButton/feedback.png";
       else
           imageURL = "../widgets/CustomFeedbackButton/support.png";
            
           
       this.button = mxui.dom.div(
            {
               "style": 'background: url("'+imageURL+'") no-repeat scroll 0 0 transparent !important;'
                + 'color: white;'
                + 'cursor: pointer;'
                + 'height: 102px;'
                + 'position: fixed;'
                + 'right: 0;'
                + 'top: 50%;'
                + 'vertical-align: bottom;'
                + 'width: 35px;'
                + 'z-index: 10000;'
            }
        );
        dojo.connect(this.button, "onclick", this, this.onButtonClick);
        dojo.place(this.button , window.document.body);
        this.actRendered();
        
    },
    onButtonClick : function () {
        
        if(this.clickmicroflow != ""){
            mx.data.action({
                params       : {
                    actionname : this.clickmicroflow
                },
                callback     : function(obj) {
                    // no MxObject expected
                   // alert("Just petted the cat a little");
                },
                error        : function(error) {
                    alert(error.description);
                },
                onValidation : function(validations) {
                    //alert("There were " + validation.length + " validation errors");
                }
            });
        }
    }
});

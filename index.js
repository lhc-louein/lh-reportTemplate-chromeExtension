$(function() {
    // Buttons
    var btnReportDaily = $('#btnReportDaily');
    var btnReportProject = $('#btnReportProject');
    // Inputs
    var inputDate = $('#date');
    var inputResult = $('#result');
    var inputProject = $("#project");
    var inputTestSite = $('#testsite');
    var inputInstruction = $('#instruction');
    var inputRemarks = $('#remarks');
    // Date
    var date = new Date();
    var todayDate = `${date.getMonth() > 10 ? 1 + date.getMonth() : "0"+(1 + date.getMonth()) }/${date.getDate() > 10?date.getDate(): "0"+date.getDate()}/${date.getFullYear().toString().slice(-2)}`

    // to Today's date
    inputDate.val(todayDate);

    // Copy Functions
    btnReportDaily.click(function (e) { 
        e.preventDefault();
        
        var getText = `${inputDate.val()}
        \n[Results]\n${inputResult.val()}`;

        navigator.clipboard.writeText(getText);
    });

    btnReportProject.click(function (e) { 
        e.preventDefault();
        
        var getText = `[info](lightbulb)Completion Report[/info]\n[Project]\n${inputProject.val()}
        \n[Test site]\n${inputTestSite.val()}
        \n[Instruction]\n${inputInstruction.val()}
        \n[Remarks]\n${inputRemarks.val()}`;

        navigator.clipboard.writeText(getText);
    });

    // button copied animation
   $('.button-text').on('click', function(){
        $(this).addClass('show');

        setTimeout(() => {
            $(this).removeClass('show');
        }, 1000);
   })
});
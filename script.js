$(document).ready(function() {
    // 텍스트 선택 시 컨트롤 패널 표시
    $("#editableText").on("mouseup", function() {
        let selection = window.getSelection();
        if (selection.toString().length > 0) {
            let parentBox = $("#editableText").get(0).getBoundingClientRect();
            $("#controls").css({
                top: parentBox.bottom + window.scrollY + 10,
                left: parentBox.left + window.scrollX + 10
            }).fadeIn();
        }
    });

    // 닫기 버튼 클릭 시 컨트롤 패널 숨김
    $("#closePopup").on("click", function() {
        $("#controls").fadeOut();
    });

    // 컨트롤 패널 외부 클릭 시 닫기
    $(document).on("click", function(event) {
        if (!$(event.target).closest("#controls, #editableText").length) {
            $("#controls").fadeOut();
        }
    });

    // 스타일 적용 함수
    function applyStyle(command, value = null) {
        document.execCommand(command, false, value);
    }

    // 글자색 변경
    $("#colorPicker").spectrum({
        color: "#000000",
        showPalette: true,
        showInput: true,
        palette: [
            ['#000', '#444', '#666', '#999', '#ccc', '#eee', '#f3f3f3', '#fff'],
            ['#f00', '#f90', '#ff0', '#0f0', '#0ff', '#00f', '#90f', '#f0f']
        ],
        change: function(color) {
            applyStyle("foreColor", color.toHexString());
        }
    });

    // 배경색 변경
    $("#bgColorPicker").spectrum({
        color: "#ffffff",
        showPalette: true,
        showInput: true,
        palette: [
            ['#000', '#444', '#666', '#999', '#ccc', '#eee', '#f3f3f3', '#fff'],
            ['#f00', '#f90', '#ff0', '#0f0', '#0ff', '#00f', '#90f', '#f0f']
        ],
        change: function(color) {
            applyStyle("backColor", color.toHexString());
        }
    });

    // 글자 크기 변경
    $("#fontSize").on("input", function() {
        applyStyle("fontSize", $(this).val() + "px");
    });

    // 굵게 적용
    $("#toggleBold").on("click", function() {
        applyStyle("bold");
    });

    // 기울이기 적용
    $("#toggleItalic").on("click", function() {
        applyStyle("italic");
    });

    // 밑줄 적용
    $("#toggleUnderline").on("click", function() {
        applyStyle("underline");
    });
});
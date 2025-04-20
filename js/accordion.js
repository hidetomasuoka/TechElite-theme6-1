$(document).ready(function() {
    // 画面幅が768px未満の場合のみアコーディオン機能を有効にする関数
    function isMobileView() {
        return $(window).width() < 768;
    }
    
    // 既存のアコーディオン機能
    $('.accordion_button').on('click', function() {
        if (!isMobileView()) return; // 768px以上の場合は処理を中止
        
        console.log("Accordion button clicked");
        // Only toggle the hidden elements within the time_schedule_container
        $('.time_schedule_container .hidden').toggleClass('show');
        // Toggle a class on the container to control margin
        $('.time_schedule_container').toggleClass('accordion-open');
    });
    
    // スケジュールセクションのアコーディオン機能
    $('.schedule__continue__btn').on('click', function() {
        if (!isMobileView()) return; // 768px以上の場合は処理を中止
        
        console.log("Schedule continue button clicked");
        // Toggle the opened class on the schedule__wrap element
        $('.schedule__wrap').toggleClass('opened');
        
        // ボタンを表示/非表示
        if ($('.schedule__wrap').hasClass('opened')) {
            $('.schedule__continue').hide();
        } else {
            $('.schedule__continue').show();
        }
    });
    
    // 出展企業一覧のアコーディオン機能
    $('.exhibitor__continue__btn').on('click', function() {
        if (!isMobileView()) return; // 768px以上の場合は処理を中止
        
        console.log("Exhibitor continue button clicked");
        // Toggle the opened class on the exhibitor__list element
        $('.exhibitor__list').toggleClass('opened');
        
        // ボタンを表示/非表示
        if ($('.exhibitor__list').hasClass('opened')) {
            $('.exhibitor__continue').hide();
        } else {
            $('.exhibitor__continue').show();
        }
    });
    
    // ウィンドウサイズが変更された時に768px以上になった場合、アコーディオンの状態をリセット
    $(window).resize(function() {
        if (!isMobileView()) {
            // 768px以上の場合、アコーディオンを開いた状態にリセット
            $('.time_schedule_container').addClass('accordion-open');
            $('.time_schedule_container .hidden').addClass('show');
            $('.schedule__wrap').addClass('opened');
            $('.schedule__continue').hide();
            $('.exhibitor__list').addClass('opened');
            $('.exhibitor__continue').hide();
        } else {
            // 768px未満に戻った場合、アコーディオンを閉じた状態に
            $('.time_schedule_container').removeClass('accordion-open');
            $('.time_schedule_container .hidden').removeClass('show');
            $('.schedule__wrap').removeClass('opened');
            $('.schedule__continue').show();
            $('.exhibitor__list').removeClass('opened');
            $('.exhibitor__continue').show();
        }
    });
    
    // 初期表示時にもウィンドウサイズに応じた状態にする
    if (!isMobileView()) {
        $('.time_schedule_container').addClass('accordion-open');
        $('.time_schedule_container .hidden').addClass('show');
        $('.schedule__wrap').addClass('opened');
        $('.schedule__continue').hide();
        $('.exhibitor__list').addClass('opened');
        $('.exhibitor__continue').hide();
    }
});

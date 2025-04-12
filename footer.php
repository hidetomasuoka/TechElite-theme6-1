</main>

    <!-- Floating Buttons -->
    <div class="floating-button floating-button--pc"> <!-- Renamed block and added modifier -->
        <a href="#" target="_blank" class="floating-button__link"> <!-- Added element -->
            <img src="../img/parts/side_line.svg" alt="LINEで問い合わせる" class="floating-button__icon"> <!-- Added element, updated alt -->
        </a>
    </div>

    <div class="floating-button floating-button--sp"> <!-- Renamed block and added modifier -->
        <!-- Removed nested .apply div -->
        <a href="#" target="_blank" class="floating-button__link"> <!-- Added element -->
            <span class="floating-button__text">事前申し込みはこちら（無料）</span> <!-- Renamed element -->
            <img src="../img/line.png" alt="LINEアイコン" class="floating-button__icon"> <!-- Added element, updated alt -->
        </a>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="layout--limited-width"> <!-- Use layout class -->
            <div class="footer__exhibit"> <!-- Kept element name simple -->
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdphU7Vu9xdSpRV0xaVSt9C6MpHUYG3OsTh7Vuqj8sGyInYqA/viewform" target="_blank" class="footer__exhibit-link">出展希望企業はこちら</a> <!-- Added element -->
            </div>
            <div class="footer__info"> <!-- Renamed element -->
                <span class="footer__info-label">運営会社</span> <!-- Renamed element -->
                <img src="../img/stocksun_logo.png" alt="Stocksun株式会社 ロゴ" class="footer__info-logo"> <!-- Added element, updated alt -->
                <a href="#" target="_blank" class="footer__info-policy">個人情報保護方針</a> <!-- Renamed element -->
            </div>
            <!-- Removed footer__copy as it wasn't present -->
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/accordion.js"></script>
</body>

</html>

prod:
	ddev start
	ddev exec npm run build
dev:
	ddev start
	ddev exec npm run dev
install:
	ddev start
	ddev exec npm install
	ddev composer install
	ddev exec php craft install
	@if [ -z "$(SITE_NAME)" ]; then \
		read -p "Site Name: " SITE_NAME; \
	fi; \
	echo "CRAFT_SITE_NAME=\"$$SITE_NAME\"" >> .env; \
	echo "" >> .env; \
	if [ -z "$(SYSTEM_EMAIL)" ]; then \
		read -p "System Email: " SYSTEM_EMAIL; \
	fi; \
	echo "CRAFT_SYSTEM_EMAIL=\"$$SYSTEM_EMAIL\"" >> .env; \
	echo "" >> .env; \
	if [ -z "$(TEST_EMAIL)" ]; then \
		read -p "Test Email: " TEST_EMAIL; \
	fi; \
	echo "CRAFT_TEST_EMAIL=\"$$TEST_EMAIL\"" >> .env; \
	echo "" >> .env; \
	ddev exec php craft plugin/install ckeditor
	ddev exec php craft plugin/install vite
	ddev exec php craft plugin/install minify
	ddev exec php craft plugin/install navigation
	ddev launch; \
	echo "Install complete 🎉"
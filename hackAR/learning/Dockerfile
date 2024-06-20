FROM hhvm/hhvm-proxygen:latest

RUN rm -rf /var/www
ADD . /var/www
# WORKDIR /var/www


# COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
# RUN composer install
# RUN composer require hhvm/hsl hhvm/hhvm-autoload
# RUN composer require --dev hhvm/hhast hhvm/hacktest facebook/fbexpect

CMD ["hhvm", "-m", "server", "-p", "9000","-vServer.AllowRunAsRoot=1", "Server.SourceRoot=/learning"]
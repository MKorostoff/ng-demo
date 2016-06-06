<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0c278d0a2914e30e723989b6c2d8235b
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Faker\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Faker\\' => 
        array (
            0 => __DIR__ . '/..' . '/fzaninotto/faker/src/Faker',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0c278d0a2914e30e723989b6c2d8235b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0c278d0a2914e30e723989b6c2d8235b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

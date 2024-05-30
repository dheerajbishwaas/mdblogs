<!-- resources/views/layouts/app.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>My Laravel App - @yield('title')</title>
    <!-- Include CSS files -->
</head>
<body>
    @include('layouts.header')

    <div class="container">
        @yield('content')
    </div>

    @include('layouts.footer')
    <!-- Include JavaScript files -->
</body>
</html>

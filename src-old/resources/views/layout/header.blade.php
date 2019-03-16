<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="{{route('home')}}">Cisco Academy</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        
        <ul class="navbar-nav ml-2 mr-2">
          @guest
            <li class="nav-item">
              <a class="nav-link" href="{{route('login')}}">Login</a>
            </li>
          @endguest
          @auth
            {{-- @if (Route::currentRouteName() != "admin")
              <li class="nav-item">
                  <a class="nav-link" href="{{route('admin.index')}}">Admin panel</a>
              </li>
            @endif --}}
            <li class="nav-item active">
              <div class="nav-link">
                  Hello {{Auth::user()->name}}!
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ route('logout') }}"
                  onclick="event.preventDefault();
                                              document.getElementById('logout-form').submit();">
                  {{ __('Logout') }}
              </a>

              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  @csrf
              </form>
            </li>

          @endauth
        </ul>
        
      </div>
    </nav>
  </header>
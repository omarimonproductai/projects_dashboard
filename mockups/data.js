const PROJECTS = [
  { id:"cooltra_calendar", name:"Cooltra Calendar", category:"cooltra",
    description:"Calendari de festius 2026-2027.",
    url:"https://omarimonproductai.github.io/calendar_company/index.html",
    githubRepo:"https://github.com/omarimonproductai/calendar_company", mobile:true },
  { id:"cooltra_meteo", name:"Cooltra Meteo", category:"cooltra",
    description:"Dashboard meteorològic.",
    url:"https://omarimonproductai.github.io/meteo_company/meteo_dashboard.html",
    githubRepo:"https://github.com/omarimonproductai/meteo_company", mobile:false },
  { id:"cajut", name:"Cajut", category:"cooltra",
    description:"Pulse de team meeting interactiu.",
    githubRepo:"https://github.com/omarimonproductai/cajut", mobile:true,
    buttons:[
      { label:"Presenter", url:"https://omarimonproductai.github.io/cajut/?ctrl=pulse-presenter-7k2mq" },
      { label:"Participant", url:"https://omarimonproductai.github.io/cajut/?game=team-pulse" }
    ]},
  { id:"la_liga", name:"European Leagues", category:"personal",
    description:"Lligues europees 2025/26.",
    url:"https://omarimonproductai.github.io/european_leagues/lligues_europees.html",
    githubRepo:"https://github.com/omarimonproductai/european_leagues", mobile:false },
  { id:"concerts", name:"Concerts Calendar", category:"personal",
    description:"Calendari de concerts.",
    url:"https://omarimonproductai.github.io/concerts_calendar/calendar.html",
    githubRepo:"https://github.com/omarimonproductai/concerts_calendar", mobile:true },
  { id:"ligabue", name:"My Setlists", category:"personal",
    description:"Reproductor de playlists dels meus concerts.",
    url:"https://omarimonproductai.github.io/musicplaylist/playlist_selector.html",
    githubRepo:"https://github.com/omarimonproductai/musicplaylist", mobile:true },
  { id:"tmbnew", name:"TMB New", category:"personal",
    description:"Mou-te amb TMB (mobile first)",
    url:"https://tmbnew.pages.dev/",
    githubRepo:"https://github.com/omarimonproductai/tmbnew", mobile:true }
];

const LOCAL_PROJECTS = [
  { name:"Desktop Karaoke", description:"Reproductor de playlists. Requereix configuració local." }
];

const SECTIONS = [
  { title:"Cooltra", category:"cooltra" },
  { title:"Personals", category:"personal" }
];

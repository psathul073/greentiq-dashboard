"use client";

import React from "react";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface IconMap {
    [key: string]: IconComponent;
}

const icons: IconMap = {
    diamond: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.5em' height='1.5em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.782 4.182c.648-.499.972-.748 1.346-.909q.255-.109.527-.176C8.054 3 8.477 3 9.323 3h5.354c.846 0 1.27 0 1.668.097q.273.067.527.176c.374.16.698.41 1.346.909c2.146 1.652 3.22 2.479 3.588 3.549c.163.476.224.976.18 1.474c-.1 1.118-.948 2.141-2.643 4.188l-3.993 4.822C13.813 20.072 13.044 21 12 21s-1.813-.928-3.35-2.785l-3.993-4.822c-1.695-2.047-2.542-3.07-2.643-4.188a3.55 3.55 0 0 1 .18-1.474c.368-1.07 1.442-1.897 3.588-3.55M10 8.5h4" color="currentColor" /></svg>
    ),
    building: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="m16 10l2.15.645c1.373.412 2.06.618 2.455 1.15c.395.53.395 1.248.395 2.681V22M8 9h3m-3 4h3m1 9v-3c0-.943 0-1.414-.293-1.707S10.943 17 10 17H9c-.943 0-1.414 0-1.707.293S7 18.057 7 19v3m-5 0h20" /><path d="M3 22V6.717c0-2.51 0-3.766.791-4.389s1.956-.284 4.287.392l5 1.451c1.406.408 2.109.612 2.515 1.169C16 5.896 16 6.653 16 8.169V22" /></g></svg>
    ),

    dashboard: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><circle cx="12" cy="18" r="3" /><path d="M12 15v-5m10 3c0-5.523-4.477-10-10-10S2 7.477 2 13" /></g></svg>
    ),
    sales: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M6.986 3.7c2.797 3.095 7.41-3.584 10.14-1.16c1.57 1.394 1.073 4.474-.965 6.48m-2.371 4.964c.018-.335.111-.947-.397-1.412m0 0a1.9 1.9 0 0 0-.666-.377c-1.048-.37-2.336.867-1.425 2c.49.608.867.795.832 1.486c-.025.486-.503.994-1.132 1.188c-.547.168-1.15-.055-1.531-.481c-.466-.52-.42-1.011-.423-1.225m4.345-2.59l.574-.575m-4.455 4.455l-.545.545" /><path d="M18.273 6.633c.925.178 1.133.762 1.409 2.384c.249 1.46.319 3.213.319 3.96a1.32 1.32 0 0 1-.319.74c-1.935 2.028-5.776 5.858-7.714 7.76c-.76.68-1.908.695-2.716.071c-1.653-1.487-3.241-3.168-4.797-4.686c-.625-.805-.61-1.95.07-2.708c2.051-2.127 5.762-5.768 7.856-7.78c.21-.18.468-.292.743-.317c.47 0 1.276.063 2.062.108" /></g></svg>
    ),
    contacts: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor" /></svg>
    ),
    reports: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M7.998 16h4m-4-5h8M7.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88c.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126c-.641-.642-1.569-.815-3.125-.862" /><path d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75" /></g></svg>
    ),
    settings: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M15.5 12a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" /><path d="M20.79 9.152C21.598 10.542 22 11.237 22 12s-.403 1.458-1.21 2.848l-1.923 3.316c-.803 1.384-1.205 2.076-1.865 2.456s-1.462.38-3.065.38h-3.874c-1.603 0-2.405 0-3.065-.38s-1.062-1.072-1.865-2.456L3.21 14.848C2.403 13.458 2 12.763 2 12s.403-1.458 1.21-2.848l1.923-3.316C5.936 4.452 6.338 3.76 6.998 3.38S8.46 3 10.063 3h3.874c1.603 0 2.405 0 3.065.38s1.062 1.072 1.865 2.456z" /></g></svg>
    ),
    rupee: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><path fill="currentColor" d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z" /></svg>
    ),
    pSearch: (props) => (
        <svg  {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M11.5 21c-4.478 0-6.718 0-8.109-1.391S2 15.979 2 11.5c0-4.478 0-6.718 1.391-8.109S7.021 2 11.5 2c4.478 0 6.718 0 8.109 1.391S21 7.021 21 11.5M2 7h19m-11 9h1m-5 0h1m3-4h4m-8 0h1" /><path d="M20.4 20.4L22 22m-.8-4.4a3.6 3.6 0 1 0-7.2 0a3.6 3.6 0 0 0 7.2 0" /></g></svg>
    ),
    clock: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><circle cx="12" cy="12" r="10" /><path d="M9.5 9.5L13 13m3-5l-5 5" /></g></svg>
    ),
    arrowDown: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="currentColor" /></svg>
    ),
    user: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><circle cx="12" cy="12" r="10" /><path d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5" /></g></svg>
    ),
    search: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor" /></svg>
    ),

    bell: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M5.158 11.491c-.073 1.396.011 2.882-1.236 3.817A2.3 2.3 0 0 0 3 17.153C3 18.15 3.782 19 4.8 19h14.4c1.018 0 1.8-.85 1.8-1.847c0-.726-.342-1.41-.922-1.845c-1.247-.935-1.163-2.421-1.236-3.817a6.851 6.851 0 0 0-13.684 0" /><path d="M10.5 3.125C10.5 3.953 11.172 5 12 5s1.5-1.047 1.5-1.875S12.828 2 12 2s-1.5.297-1.5 1.125M15 19a3 3 0 1 1-6 0" /></g></svg>
    ),

    sidebarR: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12c0-3.69 0-5.534.814-6.841a4.8 4.8 0 0 1 1.105-1.243C5.08 3 6.72 3 10 3h4c3.28 0 4.919 0 6.081.916c.43.338.804.759 1.105 1.243C22 6.466 22 8.31 22 12s0 5.534-.814 6.841a4.8 4.8 0 0 1-1.105 1.243C18.92 21 17.28 21 14 21h-4c-3.28 0-4.919 0-6.081-.916a4.8 4.8 0 0 1-1.105-1.243C2 17.534 2 15.69 2 12m12.5-9v18M18 7h1m-1 3h1" color="currentColor" /></svg>
    ),

    greenTec: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.5em' height='1.5em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.551 13.608c-1.52 1.633-7.34 4.403-5.523 7.42C7.68 22.11 9.56 22 10.86 22h2.278c3.415 0 5.122 0 6.29-.971c1.168-.972 1.418-2.6 1.919-5.857l.3-1.959c.354-2.297.53-3.445.096-4.464c-.434-1.018-1.398-1.715-3.325-3.108L16.979 4.6C14.582 2.867 13.383 2 12 2s-2.582.867-4.979 2.6l-1.44 1.041c-1.927 1.393-2.89 2.09-3.325 3.108c-.434 1.019-.258 2.167.095 4.464l.301 1.96c.356 2.316.586 3.809 1.109 4.827m8.42-1.874c2.367-.459 3.99-1.916 4.753-4.271c.864-2.667-.307-5.971-3.259-6.736c0 0 .91 1.085.322 2.037c-1.133 2.04-4.372 1.361-5.672 3.96c-.765 1.452-.533 3.169.569 4.24c.692.673 2.149.99 3.286.77" color="currentColor" /></svg>
    ),

    more: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.4em' height='1.4em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.992 12h.009m-.017 6h.01M12 6h.009" color="currentColor" /></svg>
    ),

    addC: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.3em' height='1.3em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m4-4H8m14 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" color="currentColor" /></svg>
    ),

    delete: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.3em' height='1.3em'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6" color="currentColor" /></svg>
    ),

};

const Icon = ({ name, className }: { name: string, className?: string }) => {
    const IconComponent = icons[name];

    if (!IconComponent) return null;

    return <IconComponent className={className} />
}

export default Icon
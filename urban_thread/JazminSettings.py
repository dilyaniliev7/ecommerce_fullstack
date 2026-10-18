# =======================
# JAZZMIN CONFIG
# =======================
JAZZMIN_SETTINGS = {
    "site_title": "Urban Thread Co. Admin",
    "site_header": "Urban Thread Co.",
    "site_brand": "Urban Thread Co.",
    "site_logo": "icon.svg",
    "site_logo_classes": "img-circle",
    "site_icon": "icon.svg",
    "welcome_sign": "Welcome to Jamil Codes Portfolio Admin",
    "copyright": "Jamil Codes © 2025",
    "user_avatar": "avatar",
    "topmenu_links": [
        {"name": "Home", "url": "admin:index", "permissions": ["auth.view_user"]},
        {"model": "auth.User"},
    ],
    "show_sidebar": True,
    "navigation_expanded": True,
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.group": "fas fa-users",
        "accounts.user": "fas fa-user-circle",
        "projects.project": "fas fa-project-diagram",
        "projects.technology": "fas fa-tools",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    "related_modal_active": True,
    "custom_css": "/admin-global.css",
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": True,
    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {
        "auth.user": "collapsible",
        "auth.group": "vertical_tabs",
    },
    "language_chooser": False,
}

# =======================
# JAZZMIN UI TWEAKS
# =======================
JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "brand_small_text": False,
    "brand_colour": False,
    "accent": "accent-olive",
    "navbar": "navbar-white navbar-light",
    "no_navbar_border": False,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-light-olive",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": False,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "lux",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success",
    },
}

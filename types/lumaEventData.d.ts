interface LumaEventData {
    entries:  Entry[];
    has_more: boolean;
    next_cursor: string;
} 

export interface Entry {
    api_id:                   string;
    event:                    Event;
    cover_image:              CoverImage;
    calendar:                 Calendar;
    start_at:                 Date;
    hosts:                    { [key: string]: null | string }[];
    guest_count:              number;
    ticket_count:             number;
    ticket_info:              TicketInfo;
    featured_guests:          { [key: string]: null | string }[];
    role:                     null;
    calendar_api_id:          string;
    is_manager:               boolean;
    platform:                 string;
    status:                   string;
    submitted_by_user_api_id: string;
    tags:                     any[];
}

interface Calendar {
    access_level:          string;
    api_id:                string;
    archived_at:           null;
    avatar_url:            string;
    cover_image_url:       string;
    description_short:     string;
    fb_pixel_id:           null;
    geo_city:              string;
    geo_country:           string;
    geo_latitude:          string;
    geo_longitude:         string;
    geo_region:            string;
    google_measurement_id: null;
    instagram_handle:      string;
    linkedin_handle:       string;
    luma_plus_active:      boolean;
    name:                  string;
    personal_user_api_id:  null;
    refund_policy:         null;
    slug:                  string;
    social_image_url:      null;
    stripe_account_id:     null;
    tax_config:            null;
    team_api_id:           null;
    tiktok_handle:         null;
    timezone:              string;
    tint_color:            string;
    twitter_handle:        string;
    verified_at:           null;
    website:               string;
    youtube_handle:        string;
    is_personal:           boolean;
}

interface CoverImage {
    vibrant_color: null;
    colors:        string[];
}

interface Event {
    api_id:                            string;
    calendar_api_id:                   string;
    cover_url:                         string;
    end_at:                            Date;
    event_type:                        string;
    hide_rsvp:                         boolean;
    location_type:                     string;
    name:                              string;
    one_to_one:                        boolean;
    recurrence_id:                     null;
    show_guest_list:                   boolean;
    start_at:                          Date;
    timezone:                          string;
    url:                               string;
    user_api_id:                       string;
    visibility:                        string;
    waitlist_enabled:                  boolean;
    can_register_for_multiple_tickets: boolean;
    duration_interval:                 string;
    virtual_info:                      VirtualInfo;
    geo_longitude:                     null | string;
    geo_latitude:                      null | string;
    geo_address_info:                  GeoAddressInfo | null;
    geo_address_visibility:            string;
}

interface GeoAddressInfo {
    city:         null;
    type:         string;
    region:       string;
    address:      string;
    country:      string;
    place_id:     string;
    city_state:   string;
    description:  string;
    full_address: string;
    mode:         string;
}

interface VirtualInfo {
    has_access: boolean;
}

interface TicketInfo {
    price:            null;
    is_free:          boolean;
    max_price:        null;
    is_sold_out:      boolean;
    spots_remaining:  number | null;
    is_near_capacity: boolean;
    require_approval: boolean;
}

export default LumaEventData;
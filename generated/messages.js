var Dota2 = require("../index");

// TODO: Autogenerate these from SteamRE resources, in to seperate file.
// Warning:  These values can change with Dota 2 updates.
Dota2.EGCItemMsg = {
    k_EMsgGCSetItemPosition: 1001,
    k_EMsgGCDelete: 1004,
    k_EMsgGCSetItemPositions: 1077
};

Dota2.EGCBaseClientMsg = {
    k_EMsgGCClientWelcome: 4004,
    k_EMsgGCServerWelcome: 4005,
    k_EMsgGCClientHello: 4006,
    k_EMsgGCServerHello: 4007,
    k_EMsgGCClientConnectionStatus: 4009,
    k_EMsgGCServerConnectionStatus: 4010
};

Dota2.EDOTAGCMsg = {
    k_EMsgGCJoinChatChannel: 7009,
    k_EMsgGCJoinChatChannelResponse: 7010,
    k_EMsgGCLeaveChatChannel: 7272,
    k_EMsgGCOtherJoinedChannel: 7013,
    k_EMsgGCOtherLeftChannel: 7014,
    k_EMsgGCRequestDefaultChatChannel: 7058,
    k_EMsgGCRequestDefaultChatChannelResponse: 7059,
    k_EMsgGCRequestChatChannelList: 7060,
    k_EMsgGCRequestChatChannelListResponse: 7061,
    k_EMsgGCChatMessage: 7273,
    k_EMsgClientsRejoinChatChannels: 7217,
    k_EMsgGCToGCLeaveAllChatChannels: 7220,
    k_EMsgGCGuildCreateRequest: 7222,
    k_EMsgGCGuildCreateResponse: 7223,
    k_EMsgGCGuildSetAccountRoleRequest: 7224,
    k_EMsgGCGuildSetAccountRoleResponse: 7225,
    k_EMsgGCRequestGuildData: 7226,
    k_EMsgGCGuildData: 7227,
    k_EMsgGCGuildInviteAccountRequest: 7228,
    k_EMsgGCGuildInviteAccountResponse: 7229,
    k_EMsgGCGuildCancelInviteRequest: 7230,
    k_EMsgGCGuildCancelInviteResponse: 7231,
    k_EMsgGCGuildUpdateDetailsRequest: 7232,
    k_EMsgGCGuildUpdateDetailsResponse: 7233,
    k_EMsgGCGuildInviteData: 7254,
    k_EMsgGCGuildOpenPartyRefresh: 7268,

    k_EMsgGCPassportDataRequest: 7248,
    k_EMsgGCPassportDataResponse: 7249,
    k_EMsgGCMatchDetailsRequest: 7095,
    k_EMsgGCMatchDetailsResponse: 7096,
    k_EMsgGCProfileRequest: 7098,
    k_EMsgGCProfileResponse: 7099,
    k_EMsgGCHallOfFameRequest: 7172,
    k_EMsgGCHallOfFameResponse:  7173,
    k_EMsgGCMatchmakingStatsRequest: 7197,
    k_EMsgGCMatchmakingStatsResponse: 7198,

    k_EMsgGCPracticeLobbyCreate: 7038,
    k_EMsgGCPracticeLobbyLeave: 7040,
    k_EMsgGCPracticeLobbyLaunch: 7041,
    k_EMsgGCPracticeLobbyList: 7042,
    k_EMsgGCPracticeLobbyListResponse: 7043,
    k_EMsgGCPracticeLobbyJoin: 7044,
    k_EMsgGCPracticeLobbySetDetails: 7046,
    k_EMsgGCPracticeLobbySetTeamSlot: 7047,
    k_EMsgGCPracticeLobbyResponse: 7055,
    k_EMsgGCPracticeLobbyKick: 7081,
    k_EMsgGCFriendPracticeLobbyListRequest: 7111,
    k_EMsgGCFriendPracticeLobbyListResponse: 7112,
    k_EMsgGCPracticeLobbyJoinResponse: 7113,
    k_EMsgGCApplyTeamToPracticeLobby: 7142,
    k_EMsgGCPracticeLobbyJoinBroadcastChannel: 7149,
    k_EMsgGCBalancedShuffleLobby: 7188,
    k_EMsgGCFlipLobbyTeams: 7320,
};

Dota2.DOTAChatChannelType_t = {
    DOTAChannelType_Regional: 0,
    DOTAChannelType_Custom: 1,
    DOTAChannelType_Party: 2,
    DOTAChannelType_Lobby: 3,
    DOTAChannelType_Team: 4,
    DOTAChannelType_Guild: 5
};

Dota2.ServerRegion = {
    UNSPECIFIED: 0,
    USWEST: 1,
    USEAST: 2,
    EUROPE: 3,
    KOREA: 4,
    SINGAPORE: 5,
    AUSTRALIA: 7,
    STOCKHOLM: 8,
    AUSTRIA: 9,
    BRAZIL: 10,
    SOUTHAFRICA: 11,
    PERFECTWORLDTELECOM: 12,
    PERFECTWORLDUNICOM: 13
};

Dota2.GameMode = {
    DOTA_GAMEMODE_NONE: 0,
    DOTA_GAMEMODE_AP: 1,
    DOTA_GAMEMODE_CM: 2,
    DOTA_GAMEMODE_RD: 3,
    DOTA_GAMEMODE_SD: 4,
    DOTA_GAMEMODE_AR: 5,
    DOTA_GAMEMODE_INTRO: 6,
    DOTA_GAMEMODE_HW: 7,
    DOTA_GAMEMODE_REVERSE_CM: 8,
    DOTA_GAMEMODE_XMAS: 9,
    DOTA_GAMEMODE_TUTORIAL: 10,
    DOTA_GAMEMODE_MO: 11,
    DOTA_GAMEMODE_LP: 12,
    DOTA_GAMEMODE_POOL1: 13,
    DOTA_GAMEMODE_FH: 14,
    DOTA_GAMEMODE_CUSTOM: 15
};
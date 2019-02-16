const InstagramV1 = {};

InstagramV1.CONSTANTS = require('./constants/constants');
InstagramV1.routes = require('./routes');
InstagramV1.Device = require('./devices/device').Device;
InstagramV1.CookieStorage = require('./v1/cookie-storage');
InstagramV1.CookieFileStorage = require('./v1/cookie-file-storage');
InstagramV1.CookieMemoryStorage = require('./v1/cookie-memory-storage');
InstagramV1.CookieFirebaseStorage = require('./v1/cookie-firebase-storage');
InstagramV1.Exceptions = require('./exceptions');
InstagramV1.prunedJson = require('./v1/json-pruned');
InstagramV1.Resource = require('./v1/resource');

InstagramV1.Request = require('./request').Request;
InstagramV1.Session = require('./session').Session;
InstagramV1.Account = require('./v1/account').Account;
InstagramV1.Media = require('./v1/media').Media;
InstagramV1.Like = require('./v1/like').Like;
InstagramV1.Comment = require('./v1/comment');
InstagramV1.Hashtag = require('./v1/hashtag');
InstagramV1.Link = require('./v1/link');
InstagramV1.Placeholder = require('./v1/placeholder');
InstagramV1.Location = require('./v1/location');
InstagramV1.Relationship = require('./v1/relationship').Relationship;
InstagramV1.Thread = require('./v1/thread');
InstagramV1.ThreadItem = require('./v1/thread-item');
InstagramV1.QE = require('./v1/qe');
InstagramV1.Internal = require('./v1/internal').Internal;
InstagramV1.Upload = require('./v1/upload');
InstagramV1.discover = require('./v1/discover');
InstagramV1.Save = require('./v1/save');
InstagramV1.search = require('./v1/search');

const creator = require('./v1/account-creator');
InstagramV1.AccountCreator = creator.AccountCreator;
InstagramV1.AccountPhoneCreator = creator.AccountPhoneCreator;
InstagramV1.AccountEmailCreator = creator.AccountEmailCreator;

InstagramV1.Feed = {};
InstagramV1.Feed.AccountFollowers = require('./v1/feeds/account-followers.feed').AccountFollowersFeed;
InstagramV1.Feed.AccountFollowing = require('./v1/feeds/account-following.feed').AccountFollowingFeed;
InstagramV1.Feed.Inbox = require('./v1/feeds/inbox.feed').InboxFeed;
InstagramV1.Feed.InboxPending = require('./v1/feeds/inbox-pending.feed');
InstagramV1.Feed.LocationMedia = require('./v1/feeds/location-media.feed').LocationMediaFeed;
InstagramV1.Feed.TaggedMedia = require('./v1/feeds/tagged-media.feed').TaggedMediaFeed;
InstagramV1.Feed.TagMedia = InstagramV1.Feed.TaggedMedia; // Alias but deprecated
InstagramV1.Feed.ThreadItems = require('./v1/feeds/thread-items.feed');
InstagramV1.Feed.Timeline = require('./v1/feeds/timeline.feed').TimelineFeed;
InstagramV1.Feed.UserMedia = require('./v1/feeds/user-media.feed').UserMediaFeed;
InstagramV1.Feed.SelfLiked = require('./v1/feeds/self-liked.feed');
InstagramV1.Feed.MediaComments = require('./v1/feeds/media-comments.feed');
InstagramV1.Feed.SavedMedia = require('./v1/feeds/saved-media.feed');
InstagramV1.Feed.StoryTrayFeed = require('./v1/feeds/story-tray.feed').StoryTrayFeed;
InstagramV1.Feed.UserStoryFeed = require('./v1/feeds/user-story.feed').UserStoryFeed;
InstagramV1.Feed.StoryViewersFeed = require('./v1/feeds/story-viewers.feed').StoryViewersFeed;

InstagramV1.Web = {};
InstagramV1.Web.Request = require('./v1/web/web-request').WebRequest;
const challenge = require('./v1/web/challenge');
InstagramV1.Web.Challenge = challenge.Challenge;
InstagramV1.Web.NotImplementedChallenge = challenge.NotImplementedChallenge;
InstagramV1.Web.EmailVerificationChallenge = challenge.EmailVerificationChallenge;
InstagramV1.Web.PhoneVerificationChallenge = challenge.PhoneVerificationChallenge;

module.exports = InstagramV1;

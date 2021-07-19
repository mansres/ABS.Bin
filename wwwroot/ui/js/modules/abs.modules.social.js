//B2B
function Follow(FollowerID, FollowedID) {
    var Following = {
        "FollowerID": FollowerID,
        "FollowedID": FollowedID
    }
    var Selector = '#' + FollowedID;
    $(Selector).attr("disabled", true);
    $(Selector).css('cursor', 'wait');
    $.ajax({
        url: '/api/v2/Social/Follows',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        headers: {
            RequestVerificationToken:
                $('input:hidden[name="__RequestVerificationToken"]').val()
        },
        data: JSON.stringify(Following)
    }).done(function (result) {
        $(Selector).css('cursor', 'pointer');
        console.log(result);
        console.log(result.ID);
        $(Selector).replaceWith('<a  id="' + result.ID + '" class="btn btn-block text-white bg-danger" onclick="Unfollow(\'' + result.ID + "','" + FollowerID + "','" + FollowedID + '\')" >Unfollow</a>');
    });
}

// Unfollow
function Unfollow(FollowRecordID, FollowerID, FollowedID) {
    var Selector = '#' + FollowRecordID;
    $(Selector).attr("disabled", true);
    $(Selector).css('cursor', 'wait');
    $.ajax({
        url: '/api/v2/Social/Follows/' + FollowRecordID,
        type: 'DELETE',
        contentType: 'application/json; charset=utf-8',
        headers: {
            RequestVerificationToken:
                $('input:hidden[name="__RequestVerificationToken"]').val()
        },
    }).done(function (result) {
        $(Selector).css('cursor', 'pointer');
        toastr.info('@_["You have stopped following this account."]');
        console.log(result);
        $(Selector).replaceWith('<a  id="' + FollowedID + '" class="btn btn-block text-white bg-blue" onclick="Follow(\'' + FollowerID + "','" + FollowedID + '\')" >Follow<div class="ripple-container"></div></a>');
    });
}
# FranchiseLeadsPro Website Maintenance Guide

## Table of Contents
1. [Traffic Management](#traffic-management)
2. [Monitoring & Analytics](#monitoring--analytics)
3. [Fixing Common Issues](#fixing-common-issues)
4. [Backup Strategy](#backup-strategy)
5. [Scaling Checklist](#scaling-checklist)
6. [Contact Information](#contact-information)

---

## Traffic Management

### Current Infrastructure
Your website is built on a robust, auto-scaling infrastructure:
- **Frontend Hosting**: Vercel/Lovable hosting (auto-scales automatically)
- **Backend/Database**: Supabase (handles load automatically)
- **CDN**: Built-in content delivery network for fast global access

### Handling High Traffic

#### 1. Automatic Scaling
- Both Vercel and Supabase automatically scale to handle traffic spikes
- No manual intervention needed for most traffic increases
- Free tier handles significant traffic before requiring upgrade

#### 2. Performance Optimization
- **Images**: Already using lazy loading for optimal performance
- **Caching**: CDN caching enabled by default
- **Code Splitting**: React automatically splits code for faster loading
- **Compression**: Gzip/Brotli compression enabled automatically

#### 3. Database Performance
- Add database indexes to frequently queried columns
- Monitor slow queries in Supabase dashboard
- Use database connection pooling (built-in)
- Implement query result caching for expensive operations

#### 4. Edge Functions
- Keep functions lightweight and fast
- Use background tasks for long-running operations
- Implement proper error handling
- Set appropriate timeout limits

---

## Monitoring & Analytics

### Built-in Monitoring Tools

#### 1. Supabase Dashboard
**Access**: https://supabase.com/dashboard/project/yquuidpajigvecyonqir

**What to Monitor**:
- Database performance metrics
- Query execution times
- Connection pool usage
- Storage usage
- API request rates

**Key Metrics**:
- Response times
- Error rates
- Active connections
- CPU and memory usage

#### 2. Database Logs
**Access**: https://supabase.com/dashboard/project/yquuidpajigvecyonqir/logs/postgres-logs

**Check for**:
- Slow queries
- Connection errors
- Authentication issues
- Permission errors

#### 3. Edge Function Logs
**Access**: https://supabase.com/dashboard/project/yquuidpajigvecyonqir/functions

**Monitor**:
- Function execution times
- Error messages
- Request/response logs
- Memory usage

#### 4. Authentication Logs
**Access**: https://supabase.com/dashboard/project/yquuidpajigvecyonqir/auth/logs

**Track**:
- Login attempts
- Failed authentication
- User registration events
- Password reset requests

### Browser-Based Monitoring

#### Console Errors
1. Open browser (Chrome/Firefox)
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Look for red error messages

#### Network Requests
1. Open Developer Tools (F12)
2. Go to Network tab
3. Reload page
4. Check for failed requests (red)
5. Look at request timing

---

## Fixing Common Issues

### Issue 1: Slow Page Loading

**Symptoms**:
- Pages take more than 3 seconds to load
- Images loading slowly
- Blank page before content appears

**Diagnosis**:
1. Check browser Network tab for slow resources
2. Review Supabase query performance logs
3. Check image sizes and optimization

**Solutions**:
- Optimize large images (compress, resize)
- Add database indexes to slow queries
- Enable lazy loading for off-screen content
- Implement browser caching headers
- Use image CDN for large media files

### Issue 2: Database Connection Errors

**Symptoms**:
- "Connection refused" errors
- "Too many connections" errors
- Timeout errors

**Diagnosis**:
1. Check Supabase connection pool status
2. Review active database connections
3. Check for connection leaks in code

**Solutions**:
- Upgrade Supabase plan if hitting connection limits
- Implement proper connection closing in code
- Use connection pooling (already enabled)
- Review and optimize query patterns

### Issue 3: Edge Function Failures

**Symptoms**:
- Contact form not working
- Email notifications failing
- API endpoints returning errors

**Diagnosis**:
1. Check edge function logs
2. Review error messages in Supabase dashboard
3. Test function manually in Supabase

**Solutions**:
- Verify all secrets are set correctly
- Check function timeout limits
- Review error handling in function code
- Test with sample data in Supabase dashboard

### Issue 4: Authentication Problems

**Symptoms**:
- Users can't log in
- Redirects to wrong page after login
- "Invalid credentials" errors

**Diagnosis**:
1. Check auth logs in Supabase
2. Verify redirect URLs are correct
3. Test in incognito mode

**Solutions**:
- Set correct Site URL in Supabase (Authentication > URL Configuration)
- Add all redirect URLs (preview, production, custom domain)
- Clear browser cache and cookies
- Verify email templates are working

### Issue 5: SEO/Indexing Issues

**Symptoms**:
- Pages not showing in Google
- Low search rankings
- Sitemap errors

**Diagnosis**:
1. Check Google Search Console
2. Verify sitemap.xml is accessible
3. Test robots.txt

**Solutions**:
- Submit updated sitemap to Google Search Console
- Request indexing for important pages
- Fix any crawl errors reported
- Add internal links to new pages
- Update meta titles and descriptions

---

## Backup Strategy

### Automatic Backups

#### Database Backups (Supabase)
- **Frequency**: Daily automatic backups
- **Retention**: Varies by plan (7-30 days)
- **Location**: Supabase infrastructure
- **Access**: Supabase dashboard

#### Code Backups (Lovable)
- **Frequency**: Every change is versioned
- **Retention**: Full history available
- **Location**: Lovable platform
- **Access**: Version history in project

### Manual Backup Procedures

#### 1. Database Backup
```sql
-- Export data from Supabase Dashboard
1. Go to Database > Backups
2. Click "Download Backup"
3. Save .sql file to secure location
4. Store backup with date label (e.g., backup-2025-01-15.sql)
```

#### 2. Code Backup
```
1. Click project name in Lovable
2. Go to Settings
3. Export to GitHub (recommended)
OR
4. Download project files manually
```

#### 3. Media/Assets Backup
- Download images from src/assets folder
- Save customer videos from public/videos
- Export client logos and branding assets

### Backup Schedule Recommendation

**Weekly**:
- Download database backup
- Export recent blog posts
- Save analytics reports

**Monthly**:
- Full site backup to GitHub
- Download all media assets
- Document configuration changes

**Before Major Changes**:
- Always backup before database migrations
- Save current version before major updates
- Export data before schema changes

---

## Scaling Checklist

### When Traffic Grows

#### Immediate Actions (Traffic Spike)
- [ ] Monitor Supabase dashboard for performance
- [ ] Check database connection pool usage
- [ ] Review edge function execution times
- [ ] Watch for error rate increases
- [ ] Enable performance monitoring if not active

#### Short-term Actions (Steady Growth)
- [ ] Review and upgrade Supabase plan if needed
- [ ] Analyze slow database queries
- [ ] Add indexes to frequently accessed tables
- [ ] Implement query result caching
- [ ] Optimize image sizes and formats

#### Medium-term Actions (Scaling Up)
- [ ] Implement rate limiting on forms
- [ ] Add request throttling to APIs
- [ ] Set up CDN for large media files
- [ ] Optimize database schema
- [ ] Review and optimize edge functions

#### Long-term Actions (Major Growth)
- [ ] Consider dedicated database instance
- [ ] Implement advanced caching strategies
- [ ] Set up load testing procedures
- [ ] Create disaster recovery plan
- [ ] Establish 24/7 monitoring system

### Performance Targets

**Page Load Time**: < 2 seconds
**Time to Interactive**: < 3 seconds
**Database Query Time**: < 100ms average
**Edge Function Response**: < 500ms
**Uptime Target**: 99.9%

### Upgrade Triggers

**Consider upgrading when**:
- Database connections frequently maxed out
- Storage approaching 80% of limit
- Bandwidth usage near plan limit
- Need priority support
- Require longer backup retention

---

## Troubleshooting Workflow

### Step-by-Step Debugging

#### 1. Identify the Problem
- What is the exact error message?
- When did the problem start?
- Does it happen for all users or specific ones?
- Is it consistent or intermittent?

#### 2. Gather Information
- Check browser console for errors
- Review Supabase logs (database, auth, functions)
- Check network requests in browser DevTools
- Note any recent changes or deployments

#### 3. Isolate the Issue
- Test in incognito mode (rules out cache)
- Try different browsers
- Test on different devices
- Check if issue is frontend or backend

#### 4. Research and Fix
- Search error message in Google/Stack Overflow
- Check Supabase/Lovable documentation
- Review similar issues in forums
- Test potential solutions in staging

#### 5. Verify the Fix
- Test the specific issue that was reported
- Check related functionality
- Monitor logs for new errors
- Ask user to verify if reported by customer

#### 6. Document the Solution
- Note what caused the issue
- Record the solution applied
- Update this guide if needed
- Share learnings with team

---

## Important Links & Resources

### Supabase Dashboard
- Main Dashboard: https://supabase.com/dashboard/project/yquuidpajigvecyonqir
- Database Logs: https://supabase.com/dashboard/project/yquuidpajigvecyonqir/logs/postgres-logs
- Auth Logs: https://supabase.com/dashboard/project/yquuidpajigvecyonqir/auth/logs
- Edge Functions: https://supabase.com/dashboard/project/yquuidpajigvecyonqir/functions
- Storage: https://supabase.com/dashboard/project/yquuidpajigvecyonqir/storage/buckets

### External Tools
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Vercel Dashboard: https://vercel.com/dashboard

### Documentation
- Lovable Docs: https://docs.lovable.dev
- Supabase Docs: https://supabase.com/docs
- Troubleshooting Guide: https://docs.lovable.dev/tips-tricks/troubleshooting

---

## Contact Information

### Website Details
- **Website URL**: franchiseleadspro.com
- **Email**: support@franchiseleadspro.com
- **Phone**: (+1) 3215159932

### Technical Support
- **Lovable Support**: support@lovable.dev
- **Supabase Support**: support@supabase.com

### Emergency Contacts
- **Project Owner**: Somnath Mondal
- **Instagram**: @iamsomnath_mondal
- **LinkedIn**: https://www.linkedin.com/company/franchiseleadspro/

---

## Quick Reference Commands

### Checking Website Status
```bash
# Check if website is up
curl -I https://franchiseleadspro.com

# Check response time
curl -w "@-" -o /dev/null -s https://franchiseleadspro.com
```

### Database Quick Checks
```sql
-- Check number of active connections
SELECT count(*) FROM pg_stat_activity;

-- Find slow queries
SELECT query, mean_exec_time 
FROM pg_stat_statements 
ORDER BY mean_exec_time DESC 
LIMIT 10;

-- Check table sizes
SELECT schemaname, tablename, 
       pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename))
FROM pg_tables 
WHERE schemaname = 'public';
```

---

## Maintenance Schedule

### Daily Tasks
- [ ] Check for console errors in browser
- [ ] Review critical error notifications
- [ ] Monitor website uptime

### Weekly Tasks
- [ ] Review Supabase performance metrics
- [ ] Check database backup completion
- [ ] Review edge function logs
- [ ] Monitor SEO rankings in Google Search Console

### Monthly Tasks
- [ ] Full database backup download
- [ ] Performance audit
- [ ] Security review
- [ ] Update dependencies if needed
- [ ] Review and optimize slow queries

### Quarterly Tasks
- [ ] Comprehensive site audit
- [ ] Review and update documentation
- [ ] Capacity planning review
- [ ] Disaster recovery test
- [ ] SEO strategy review

---

## Version History

- **Version 1.0** - Initial maintenance guide created
- **Last Updated**: January 2025
- **Next Review**: April 2025

---

**Note**: Keep this document updated as your infrastructure evolves and new issues are discovered. Regular maintenance and monitoring are key to a healthy, high-performing website.
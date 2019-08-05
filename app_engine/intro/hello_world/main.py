
import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
        #self.response.headers['Content-Type'] = 'text/html'
        self.response.write('<h1>Hello, Michael</h1>')



class AboutPage(webapp2.RequestHandler):
    def get(self):
        self.response.write('<h3>This is the about page</h3>')

class NewsPage(webapp2.RequestHandler):
    def get(self):
        self.response.write('<h1><u>news page</u></h1>')

route = [('/',MainPage),('/about',AboutPage)]
app = webapp2.WSGIApplication(route, debug=True)

route = [('/',MainPage),('/news',NewsPage)]
app = webapp2.WSGIApplication(route, debug=True)
